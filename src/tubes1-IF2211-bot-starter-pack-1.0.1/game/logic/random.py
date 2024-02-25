import random
from typing import Optional

from game.logic.base import BaseLogic
from game.models import GameObject, Board, Position
from ..util import get_direction


class RandomLogic(BaseLogic):
    def __init__(self):
        self.directions = [(1, 0), (0, 1), (-1, 0), (0, -1)]
        self.goal_position: Optional[Position] = None
        self.current_direction = 0

    def next_move(self, board_bot: GameObject, board: Board):
        props = board_bot.properties
        base = board_bot.properties.base
        print("NEXT MOVE\n")
        print("Print dia sekarang",props.diamonds) #ini kantong
        print("Lokasi base x",base.x)
        print("Lokasi base y",base.y)
        print("Inv size",props.inventory_size)
        print("Score bot",props.score)
        print("Points bot",props.points)
        
        # Analyze new state
        if props.diamonds == 5:
            # Move to base
            self.goal_position = base
        else:
            # Just roam around
            self.goal_position = None

        current_position = board_bot.position
        print("current position", current_position)
        if self.goal_position:
            print("masuk 1,0 terusss")
            # We are aiming for a specific position, calculate delta(bakal menuju ke base)
            delta_x, delta_y = get_direction(
                current_position.x,
                current_position.y,
                self.goal_position.x,
                self.goal_position.y,
            )
        else:
            # Roam around
            
            delta = self.directions[self.current_direction]
            print("masuk else")
            delta_x = delta[0]
            delta_y = delta[1]
            if random.random() > 0.6:
                print("masuk random")
                self.current_direction = (self.current_direction + 1) % len(
                    self.directions
                )
        return delta_x, delta_y
