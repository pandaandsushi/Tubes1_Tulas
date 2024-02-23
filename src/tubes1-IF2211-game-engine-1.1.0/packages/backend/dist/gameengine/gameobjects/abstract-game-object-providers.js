"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractGameObjectProvider = void 0;
class AbstractGameObjectProvider {
    config;
    constructor(config) {
        this.config = Object.freeze(config ?? {});
    }
    onBoardInitialized(board) { }
    onBotJoined(bot, board) { }
    onBotFinished(bot, board) { }
    onGameObjectsRemoved(board, gameObjects) { }
    onGameObjectsAdded(board, gameObjects) { }
}
exports.AbstractGameObjectProvider = AbstractGameObjectProvider;
//# sourceMappingURL=abstract-game-object-providers.js.map