"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiamondButtonProvider = void 0;
const abstract_game_object_providers_1 = require("../abstract-game-object-providers");
const diamond_button_1 = require("./diamond-button");
class DiamondButtonProvider extends abstract_game_object_providers_1.AbstractGameObjectProvider {
    /**
     * Listen for when game objects are removed and generate new button when needed.
     */
    onGameObjectsRemoved(board, gameObjects) {
        // Check number of diamonds on the board
        const existingButtons = board.getGameObjectsByType(diamond_button_1.DiamondButtonGameObject);
        /* istanbul ignore else */
        if (existingButtons.length == 0) {
            this.generateNewButton(board);
        }
    }
    onBoardInitialized(board) {
        this.generateNewButton(board);
    }
    generateNewButton(board) {
        const position = board.getEmptyPosition();
        const button = new diamond_button_1.DiamondButtonGameObject(position);
        board.addGameObjects([button]);
    }
}
exports.DiamondButtonProvider = DiamondButtonProvider;
//# sourceMappingURL=diamond-button-provider.js.map