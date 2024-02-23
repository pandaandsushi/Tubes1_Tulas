"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiamondProvider = void 0;
const abstract_game_object_providers_1 = require("../abstract-game-object-providers");
const diamond_1 = require("./diamond");
class DiamondProvider extends abstract_game_object_providers_1.AbstractGameObjectProvider {
    constructor(config) {
        super(config);
    }
    onBoardInitialized(board) {
        this.generateDiamonds(board);
    }
    onGameObjectsRemoved(board, other) {
        const diamonds = board.getGameObjectsByType(diamond_1.DiamondGameObject);
        const minLimit = board.width * board.height * this.config.minRatioForGeneration;
        if (diamonds.length == 0) {
            this.generateDiamonds(board);
        }
    }
    generateDiamonds(board) {
        const count = Math.floor(board.width * board.height * this.config.generationRatio);
        const diamonds = new Array(count)
            .fill(null)
            .map((_) => new diamond_1.DiamondGameObject(board.getEmptyPosition(), 1));
        const redDiamonds = Math.floor(diamonds.length * this.config.redRatio);
        for (let i = 0; i < redDiamonds; i++) {
            diamonds[i].points = 2;
        }
        board.addGameObjects(diamonds);
    }
}
exports.DiamondProvider = DiamondProvider;
//# sourceMappingURL=diamond-provider.js.map