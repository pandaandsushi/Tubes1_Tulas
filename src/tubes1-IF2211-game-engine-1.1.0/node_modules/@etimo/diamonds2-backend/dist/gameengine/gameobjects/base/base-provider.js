"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseProvider = void 0;
const abstract_game_object_providers_1 = require("../abstract-game-object-providers");
const bot_1 = require("../bot/bot");
const base_1 = require("./base");
class BaseProvider extends abstract_game_object_providers_1.AbstractGameObjectProvider {
    onGameObjectsAdded(board, gameObjects) {
        gameObjects.forEach((gameObject) => {
            if (!(gameObject instanceof bot_1.BotGameObject)) {
                return;
            }
            // Whenever a bot game object is added to the board, add a base for it
            if (!gameObject.base) {
                gameObject.base = board.getEmptyPosition();
            }
            board.addGameObjects([new base_1.BaseGameObject(gameObject)]);
        });
    }
    onGameObjectsRemoved(board, gameObjects) {
        gameObjects.forEach((gameObject) => {
            if (!(gameObject instanceof bot_1.BotGameObject)) {
                return;
            }
            // Whenever a bot game object is added to the board, add a base for it
            const base = board
                .getGameObjectsByType(base_1.BaseGameObject)
                .find((base) => base.position.x === gameObject.base.x &&
                base.position.y === gameObject.base.y);
            if (base) {
                board.removeGameObject(base);
            }
        });
    }
}
exports.BaseProvider = BaseProvider;
//# sourceMappingURL=base-provider.js.map