"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotGameObject = void 0;
const abstract_game_object_1 = require("../abstract-game-object");
class BotGameObject extends abstract_game_object_1.AbstractGameObject {
    base;
    diamonds;
    timeJoined;
    expiresAt;
    inventorySize;
    canTackle;
    score;
    name;
    nextMoveAvailableAt;
    botId;
    constructor(options) {
        super(options.base);
        this.base = options.base;
        this.diamonds = options.diamonds;
        this.timeJoined = options.timeJoined;
        this.expiresAt = options.expiresAt;
        this.inventorySize = options.inventorySize;
        this.canTackle = options.canTackle;
        this.score = options.score;
        this.name = options.name;
        this.nextMoveAvailableAt = options.nextMoveAvailableAt;
        this.botId = options.botId;
    }
    get properties() {
        return {
            diamonds: this.diamonds,
            score: this.score,
            nextMoveAvailableAt: this.nextMoveAvailableAt,
            name: this.name,
            inventorySize: this.inventorySize,
            canTackle: this.canTackle,
            millisecondsLeft: this.expiresAt.getTime() - new Date().getTime(),
            timeJoined: this.timeJoined,
            base: this.base,
        };
    }
    onGameObjectEntered(gameObject) {
        if (gameObject instanceof BotGameObject) {
            const otherBot = gameObject;
            // Return if the entering bot is not allowed to tackle (should not happen)
            if (!otherBot.canTackle) {
                return;
            }
            // I am sent back to base
            this.position = this.base;
            // Also they steal some diamonds from me
            const canSteal = Math.min(this.diamonds, otherBot.inventorySize - otherBot.diamonds);
            this.diamonds = Math.max(this.diamonds - canSteal, 0);
            otherBot.diamonds += canSteal;
        }
    }
    canGameObjectEnter(gameObject) {
        if (gameObject instanceof BotGameObject) {
            const otherBot = gameObject;
            if (otherBot.canTackle) {
                return true;
            }
            if (otherBot.base.x === this.position.x &&
                otherBot.base.y === this.position.y) {
                this.position = this.base;
                return true;
            }
        }
        return false;
    }
}
exports.BotGameObject = BotGameObject;
//# sourceMappingURL=bot.js.map