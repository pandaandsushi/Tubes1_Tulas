"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseGameObject = void 0;
const abstract_game_object_1 = require("../abstract-game-object");
const bot_1 = require("../bot/bot");
class BaseGameObject extends abstract_game_object_1.AbstractGameObject {
    bot;
    constructor(bot) {
        super(bot.base);
        this.bot = bot;
    }
    get properties() {
        return {
            name: this.bot.name,
        };
    }
    onGameObjectEntered(gameObject) {
        if (gameObject instanceof bot_1.BotGameObject) {
            const bot = gameObject;
            if (bot.base === this.bot.base) {
                bot.score += bot.diamonds;
                bot.diamonds = 0;
            }
        }
    }
}
exports.BaseGameObject = BaseGameObject;
//# sourceMappingURL=base.js.map