"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyBotProvider = void 0;
const bot_provider_1 = require("../bot/bot-provider");
const dummy_bot_1 = require("./dummy-bot");
class DummyBotProvider extends bot_provider_1.BotProvider {
    constructor(config) {
        // @ts-ignore
        super(config);
    }
    onBoardInitialized(board) {
        const config = this.config;
        for (let i = 1; i < config.count + 1; i++) {
            const bot = this.getInitializedBot({
                name: config.prefix + " " + i,
            }, board.getEmptyPosition(), board);
            const dummyBot = new dummy_bot_1.DummyBotGameObject({ ...bot });
            // Register move timer
            board.registerGameObjectForCallbackLoop(dummyBot, 1000);
            // Register session finished timer
            const boardConfig = board.getConfig();
            board.registerGameObjectForCallbackLoop(dummyBot, boardConfig.sessionLength * 1000);
            board.addGameObjects([dummyBot]);
        }
    }
    onBotJoined(bot, board) {
        // DO NOTHING.
        // Override this function so we don't trigger BotProvider onBotJoined twice.
    }
    onGameObjectsRemoved(board, gameObjects) {
        const dummyBots = board.getGameObjectsByType(dummy_bot_1.DummyBotGameObject);
        if (dummyBots.length == 0) {
            // Recreate the bots
            this.onBoardInitialized(board);
        }
    }
}
exports.DummyBotProvider = DummyBotProvider;
//# sourceMappingURL=dummy-bot-provider.js.map