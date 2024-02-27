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
        print(f"Redbutton position: {red_button_objects[0].position}")

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
        if props.diamonds == 5 or (distance_base >= time_left-1.75 and distance_base>0):
            print("To base we go!")
            self.goal_position = base
        # There is still time to get diamonds
        else:
            #get list of diamond and position
            diamond_list = board.diamonds
            diamond_point = [j.properties.points for j in diamond_list]
            diamond_position = [i.position for i in diamond_list]
            #get closest diamond
            distance_list = [(abs(current_position.x - position.x) + abs(current_position.y - position.y)) for position in diamond_position]
            # List all bots
            bot_list = board.bots
            bot_position = [i.position for i in bot_list]
            bot_pockets = [j.properties.points for j in bot_list]

            min_dia_by_walking = min(distance_list)
            to_first_tele = (abs(teleport_objects[0].position.x - current_position.x) + abs(teleport_objects[0].position.y - current_position.y))
            to_sec_tele = (abs(teleport_objects[1].position.x - current_position.x) + abs(teleport_objects[1].position.y - current_position.y))
            to_red_button = (abs(red_button_objects[0].position.x-current_position.x)+ abs(red_button_objects[0].position.y-current_position.y))

            # here is the opt to use tele to reach dia 
            if (min_dia_by_walking<to_first_tele and min_dia_by_walking<to_sec_tele):
                min_dia_by_first_tele = 999999
                min_dia_by_sec_tele = 999999
            # opt to use red button
            elif(to_red_button<min_dia_by_walking and min_dia_by_walking>7):
                self.goal_position = red_button_objects[0].position
            else:
                goto_first_tele_to_dia_dist = [((abs(teleport_objects[1].position.x - position.x) + abs(teleport_objects[1].position.y - position.y))) + ((abs(teleport_objects[0].position.x - current_position.x) + abs(teleport_objects[0].position.y - current_position.y))) for position in diamond_position]
                goto_sec_tele_to_dia_dist = [((abs(teleport_objects[0].position.x - position.x) + abs(teleport_objects[0].position.y - position.y))) + ((abs(teleport_objects[1].position.x - current_position.x) + abs(teleport_objects[1].position.y - current_position.y)))for position in diamond_position]
                # self.goal_position = diamond_position[distance_list.index(min(distance_list))]
                #ignore red diamonds when inventory is at 4, or else bot will go back and forth for the red dias
                min_dia_by_first_tele = min(goto_first_tele_to_dia_dist) 
                min_dia_by_sec_tele = min(goto_sec_tele_to_dia_dist)
                print("----MINIMUM TO DIA")
                print("By walking: ",min_dia_by_walking)
                print("By first_tele: ",min_dia_by_first_tele)
                print("By sec_tele: ",min_dia_by_sec_tele)
            if (props.diamonds == 4 and diamond_point[distance_list.index(min(distance_list))]== 2):
                # find the closest blue dias available also considering base distance to dias
                dist = ((abs(current_position.x - diamond_list[0].position.x) + abs(current_position.y - diamond_list[0].position.y))) + ((abs(base.x - diamond_list[0].position.x) + abs(base.y - diamond_list[0].position.y)))
                obj = diamond_list[0]
                count = 0
                for i in diamond_list :
                    if (i.properties.points == 1 ):
                        goto_first_tele_to_blue_dia_dist = ((abs(teleport_objects[1].position.x - i.position.x) + abs(teleport_objects[1].position.y - i.position.y))) + ((abs(teleport_objects[0].position.x - current_position.x) + abs(teleport_objects[0].position.y - current_position.y)))
                        goto_sec_tele_to_blue_dia_dist = ((abs(teleport_objects[0].position.x - i.position.x) + abs(teleport_objects[0].position.y - i.position.y))) + ((abs(teleport_objects[1].position.x - current_position.x) + abs(teleport_objects[1].position.y - current_position.y)))
                        dist_temp =  ((abs(current_position.x - i.position.x) + abs(current_position.y - i.position.y))) + ((abs(base.x - i.position.x) + abs(base.y - i.position.y)))
                        if(dist_temp<dist and dist_temp<goto_first_tele_to_blue_dia_dist and dist_temp<goto_sec_tele_to_blue_dia_dist):
                            dist = dist_temp
                            obj = diamond_list[count]
                        elif (goto_first_tele_to_blue_dia_dist<dist_temp and goto_first_tele_to_blue_dia_dist<goto_sec_tele_to_blue_dia_dist and goto_first_tele_to_blue_dia_dist<dist):
                            dist = goto_first_tele_to_blue_dia_dist
                            obj = teleport_objects[0]
                        else:
                            dist = goto_sec_tele_to_blue_dia_dist
                            obj = teleport_objects[1]
                    count+=1
                # decide to go back to base immediately or grab another blue dias
                if(dist - ((abs(obj.position.x - base.x) + abs(current_position.y - base.y)))  < distance_base):
                    self.goal_position = obj.position
                else :
                    base = board_bot.properties.base
                    self.goal_position = base
                    
            elif (abs(min_dia_by_walking-min_dia_by_first_tele)==1 or abs(min_dia_by_walking-min_dia_by_sec_tele)==1 or abs(min_dia_by_first_tele-min_dia_by_sec_tele)==1) :
                self.goal_position = diamond_position[distance_list.index(min(distance_list))]
            else:
                # go to the closest dia by normal walking or using tele
                if (min_dia_by_walking<min_dia_by_sec_tele and min_dia_by_walking<min_dia_by_first_tele):
                    self.goal_position = diamond_position[distance_list.index(min(distance_list))]
                elif (min_dia_by_first_tele<min_dia_by_walking) and (min_dia_by_first_tele<min_dia_by_sec_tele):
                    self.goal_position = teleport_objects[0].position
                    print("USE TELE 1 TO GRAB DIA")
                else:
                    self.goal_position = teleport_objects[1].position
                    print("USE TELE 2 TO GRAB DIA")
        if self.goal_position:
            # We are aiming for a specific position, calculate delta
            if (self.goal_position == current_position):
                # buat avoid error delta=0
                random_direction = random.choice([(1, 0), (0, 1), (-1, 0), (0, -1)])
                delta_x = random_direction[0]
                delta_y = random_direction[1]
            else:
                if (self.goal_position == base and current_position!=teleport_objects[0].position and current_position!=teleport_objects[1].position):  # ini baru aplikasi tele ke base, belum untuk goal apapun
                    goto_first_tele_to_base_dist = ((abs(teleport_objects[1].position.x - base.x) + abs(teleport_objects[1].position.y - base.y))) + ((abs(teleport_objects[0].position.x - current_position.x) + abs(teleport_objects[0].position.y - current_position.y)))
                    goto_sec_tele_to_base_dist = ((abs(teleport_objects[0].position.x - base.x) + abs(teleport_objects[0].position.y - base.y))) + ((abs(teleport_objects[1].position.x - current_position.x) + abs(teleport_objects[1].position.y - current_position.y)))
                    if distance_base < goto_first_tele_to_base_dist and distance_base < goto_sec_tele_to_base_dist:
                        self.goal_position = base
                    elif (goto_first_tele_to_base_dist < distance_base and goto_first_tele_to_base_dist < goto_sec_tele_to_base_dist):
                        self.goal_position = teleport_objects[0].position
                    else:
                        self.goal_position = teleport_objects[1].position
                # tackle bot instead of collecting dias
                        
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