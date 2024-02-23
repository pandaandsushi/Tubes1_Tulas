"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiamondButtonGameObject = void 0;
const abstract_game_object_1 = require("../abstract-game-object");
const diamond_1 = require("../diamond/diamond");
const bot_1 = require("../bot/bot");
class DiamondButtonGameObject extends abstract_game_object_1.AbstractGameObject {
    /**
     * Clear all diamonds when a bot enters the cell of this button.
     */
    onGameObjectEntered(gameObject, board) {
        /* istanbul ignore else */
        if (gameObject instanceof bot_1.BotGameObject) {
            board.removeGameObjectsByType(DiamondButtonGameObject);
            board.removeGameObjectsByType(diamond_1.DiamondGameObject);
        }
    }
}
exports.DiamondButtonGameObject = DiamondButtonGameObject;
//# sourceMappingURL=diamond-button.js.map