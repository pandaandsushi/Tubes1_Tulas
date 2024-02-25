from typing import Optional
import time
from game.logic.base import BaseLogic
from game.models import GameObject, Board, Position
from ..util import get_direction
import random

class Terdekat(BaseLogic):
    def __init__(self):
        self.goal_position: Optional[Position] = None

    def next_move(self, board_bot: GameObject, board: Board):
        start_time = time.time()
        props = board_bot.properties
        # Analyze new state
        current_position = board_bot.position
        base = board_bot.properties.base
        time_left = board_bot.properties.milliseconds_left
        distance_base = ((current_position.x - base.x)**2 + (current_position.y - base.y)**2)**(1/2)

        # Move to base if bot's inventory is full or there is no timeleft
        if props.diamonds == 5 or distance_base >= time_left:
            self.goal_position = base
        # There is still time to get diamonds
        else:
            #get list of diamond and position
            diamond_list = board.diamonds
            diamond_point = [j.properties.points for j in diamond_list]
            diamond_position = [i.position for i in diamond_list]
            #get closest diamond
            distance_list = [((current_position.x - position.x)**2 + (current_position.y - position.y)**2)**(1/2) for position in diamond_position]
            #ignore red diamonds
            if (props.diamonds == 4 and diamond_point[distance_list.index(min(distance_list))]== 2):
                # tambahin yang ngecek jarak diamond biru terdekat dan base
            
                dist = (((current_position.x - diamond_list[0].position.x)**2 + (current_position.y - diamond_list[0].position.y)**2)**(1/2))
                obj = diamond_list[0]
                count = 0
                for i in diamond_list :
                    if (i.properties.points == 1 ):
                        dist_temp =  (((current_position.x - i.position.x)**2 + (current_position.y - i.position.y)**2)**(1/2))
                    if(dist_temp<dist):
                        dist = dist_temp
                        obj = diamond_list[count]
                    count+=1
                if(dist<distance_base):
                    self.goal_position = obj.position
                else :
                    base = board_bot.properties.base
                    self.goal_position = base
                    
            else :
                self.goal_position = diamond_position[distance_list.index(min(distance_list))]

        if self.goal_position:
            # We are aiming for a specific position, calculate delta
            if (self.goal_position == current_position):
                # buat avoid error delta=0
                random_direction = random.choice([(1, 0), (0, 1), (-1, 0), (0, -1)])
                delta_x = random_direction[0]
                delta_y = random_direction[1]
            else:
                delta_x, delta_y = get_direction(
                    current_position.x,
                    current_position.y,
                    self.goal_position.x,
                    self.goal_position.y,
                )
        end_time = time.time()
        elapse_time = end_time-start_time
        print("INI WAKTU SETIAP LANGKAH ", elapse_time)
        return delta_x, delta_y