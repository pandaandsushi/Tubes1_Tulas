from game.logic.base import BaseLogic
from game.models import Board, GameObject
class MyBot(BaseLogic):
    def _init_(self):
        # Initialize attributes necessary
        self.my_attribute = 9
    def next_move(self, board_bot: GameObject, board: Board):
        # Calculate next move
        delta_x = 1
        delta_y = 0
        return delta_x, delta_y