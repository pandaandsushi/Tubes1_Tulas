"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiamondGameObject = void 0;
const abstract_game_object_1 = require("../abstract-game-object");
const bot_1 = require("../bot/bot");
class DiamondGameObject extends abstract_game_object_1.AbstractGameObject {
    points;
    constructor(position, points) {
        super(position);
        this.points = points;
    }
    get properties() {
        return {
            points: this.points,
        };
    }
    /**
     * Remove the diamond when a bot enters and put it in the bot's inventory.
     */
    onGameObjectEntered(gameObject, board) {
        /* istanbul ignore else */
        if (gameObject instanceof bot_1.BotGameObject) {
            const bot = gameObject;
            if (bot.diamonds + this.points <= bot.inventorySize) {
                bot.diamonds += this.points;
                board.removeGameObject(this);
            }
        }
    }
}
exports.DiamondGameObject = DiamondGameObject;
//# sourceMappingURL=diamond.js.map