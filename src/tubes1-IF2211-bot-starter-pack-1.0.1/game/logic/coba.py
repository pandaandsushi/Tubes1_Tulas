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
        props = board_bot.properties
        # Analyze new state
        current_position = board_bot.position
        base = board_bot.properties.base
        time_left = board_bot.properties.milliseconds_left/1000
        distance_base = (abs(current_position.x - base.x) + abs(current_position.y - base.y))
        # print("----time left",time_left)
        # print("--dist base", distance_base)
        # Move to base if bot's inventory is full or there is no timeleft
        if props.diamonds == 5 or (distance_base >= time_left-1 and distance_base>0):
            self.goal_position = base
        # There is still time to get diamonds
        else:
            #get list of diamond and position
            diamond_list = board.diamonds
            diamond_point = [j.properties.points for j in diamond_list]
            diamond_position = [i.position for i in diamond_list]
            #get closest diamond
            distance_list = [(abs(current_position.x - position.x) + abs(current_position.y - position.y)) for position in diamond_position]
            #ignore red diamonds when inventory is at 4
            # print("TUJUAN X", )
            if (props.diamonds == 4 and diamond_point[distance_list.index(min(distance_list))]== 2):
                # tambahin yang ngecek jarak diamond biru terdekat dan base
                dist = ((abs(current_position.x - diamond_list[0].position.x) + abs(current_position.y - diamond_list[0].position.y)))
                obj = diamond_list[0]
                count = 0
                for i in diamond_list :
                    if (i.properties.points == 1 ):
                        dist_temp =  ((abs(current_position.x - i.position.x) + abs(current_position.y - i.position.y)))
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

        return delta_x, delta_y
    
# run shortcut 
# python main.py --logic Coba --email=your_email@example.com --name=your_name --password=your_password --team etimo 