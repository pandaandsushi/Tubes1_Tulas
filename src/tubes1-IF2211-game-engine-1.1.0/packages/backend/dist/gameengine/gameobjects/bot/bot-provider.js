"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotProvider = void 0;
const abstract_game_object_providers_1 = require("../abstract-game-object-providers");
const bot_1 = require("./bot");
class BotProvider extends abstract_game_object_providers_1.AbstractGameObjectProvider {
    constructor(config) {
        super(config);
    }
    onBotJoined(bot, board) {
        // Add game object to board
        const base = board.getEmptyPosition();
        const botGameObject = this.getInitializedBot(bot, base, board);
        board.addGameObjects([botGameObject]);
    }
    getInitializedBot(data, base, board) {
        const timeJoined = new Date();
        const botGameObject = new bot_1.BotGameObject({
            base: { x: base.x, y: base.y },
            botId: data.id ?? "",
            expiresAt: new Date(timeJoined.getTime() + board.getConfig().sessionLength * 1000),
            nextMoveAvailableAt: new Date(),
            inventorySize: this.config.inventorySize,
            canTackle: this.config.canTackle,
            diamonds: 0,
            score: 0,
            name: data.name ?? "",
            timeJoined,
        });
        return botGameObject;
    }
}
exports.BotProvider = BotProvider;
//# sourceMappingURL=bot-provider.js.map