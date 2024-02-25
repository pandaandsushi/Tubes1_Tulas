from typing import Optional
from game.logic.base import BaseLogic
from game.models import GameObject, Board, Position
from ..util import get_direction
import random
from typing import List, Optional

def use_teleport(tobase,tele1,tele2):
    if tobase < tele1 and tele2:
        return tobase
    elif tele1 < tobase and tele2:
        return tele1
    elif tele2 < tobase and tele1:
        return tele2

class Terdekat(BaseLogic):
    def __init__(self):
        self.goal_position: Optional[Position] = None

    # decide to use teleport or not

    # see teleport.js for details
    def get_teleport_objects(self, board: Board) -> List[GameObject]:
        return [d for d in board.game_objects if d.type == "TeleportGameObject"]

    # see diamond-button.js for details
    def get_red_button_objects(self, board: Board) -> List[GameObject]:
        return [d for d in board.game_objects if d.type == "DiamondButtonGameObject"]

    def next_move(self, board_bot: GameObject, board: Board):
        teleport_objects = self.get_teleport_objects(board)
        red_button_objects = self.get_red_button_objects(board)

        # testing redbutton and teleport
        # print(f"Redbutton position: {red_button_objects[0].position}")

        # for teleport_object in teleport_objects:
        #     print(f"TeleportGameObject position: {teleport_object.position}")
        
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
            #ignore red diamonds when inventory is at 4, or else bot will go back and forth for the red dias
            if (props.diamonds == 4 and diamond_point[distance_list.index(min(distance_list))]== 2):
                # find the closest blue dias available
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
                # decide to go back to base immediately or grab another blue dias
                if(dist<distance_base):
                    self.goal_position = obj.position
                else :
                    base = board_bot.properties.base
                    self.goal_position = base
                    
            else :
                # go to the closest dia
                self.goal_position = diamond_position[distance_list.index(min(distance_list))]

        if self.goal_position:
            # We are aiming for a specific position, calculate delta
            if (self.goal_position == current_position):
                # buat avoid error delta=0
                random_direction = random.choice([(1, 0), (0, 1), (-1, 0), (0, -1)])
                delta_x = random_direction[0]
                delta_y = random_direction[1]
            else:
                if self.goal_position == base:  # ini baru aplikasi tele ke base, belum untuk goal apapun
                    goto_first_tele_to_base_dist = ((abs(teleport_objects[1].position.x - base.x) + abs(teleport_objects[1].position.y - base.y))) + ((abs(teleport_objects[0].position.x - current_position.x) + abs(teleport_objects[0].position.y - current_position.y)))
                    goto_sec_tele_to_base_dist = ((abs(teleport_objects[0].position.x - base.x) + abs(teleport_objects[0].position.y - base.y))) + ((abs(teleport_objects[1].position.x - current_position.x) + abs(teleport_objects[1].position.y - current_position.y)))
                    if distance_base < goto_first_tele_to_base_dist and distance_base < goto_sec_tele_to_base_dist:
                        self.goal_position = base
                    elif (goto_first_tele_to_base_dist < distance_base and goto_first_tele_to_base_dist < goto_sec_tele_to_base_dist):
                        self.goal_position = teleport_objects[0].position
                    else:
                        self.goal_position = teleport_objects[1].position
                delta_x, delta_y = get_direction(
                    current_position.x,
                    current_position.y,
                    self.goal_position.x,
                    self.goal_position.y,
                )

        return delta_x, delta_y
# ini muncul issue kalau di detik2 terakhir, mau balik ke base, tapi di jalan ketemu teleporter, jadi ke teleport, 
# trus dia bakal invalid move delta x cannot = delta y lagi, game nya ga mau selesai


# run shortcut 
# python main.py --logic Coba --email=your_email@example.com --name=your_name --password=your_password --team etimo