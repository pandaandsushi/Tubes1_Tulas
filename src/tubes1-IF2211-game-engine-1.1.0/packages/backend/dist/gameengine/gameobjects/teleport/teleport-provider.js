"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeleportProvider = void 0;
const abstract_game_object_providers_1 = require("../abstract-game-object-providers");
const teleport_1 = require("./teleport");
class TeleportProvider extends abstract_game_object_providers_1.AbstractGameObjectProvider {
    constructor(config) {
        super(config);
    }
    onBoardInitialized(board) {
        this.generateTeleports(board);
    }
    generateTeleports(board) {
        for (let i = 0; i < this.config.pairs; i++) {
            const pairId = `${i + 1}`;
            board.addGameObjects([
                new teleport_1.TeleportGameObject(board.getEmptyPosition(), { pairId }),
                new teleport_1.TeleportGameObject(board.getEmptyPosition(), { pairId }),
            ]);
        }
    }
}
exports.TeleportProvider = TeleportProvider;
//# sourceMappingURL=teleport-provider.js.map