"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeleportGameObject = void 0;
const abstract_game_object_1 = require("../abstract-game-object");
class TeleportGameObject extends abstract_game_object_1.AbstractGameObject {
    _properties;
    constructor(position, _properties) {
        super(position);
        this._properties = _properties;
    }
    get properties() {
        return this._properties;
    }
    onGameObjectEntered(gameObject, board) {
        const bot = gameObject;
        const teleports = board.getGameObjectsByType(TeleportGameObject);
        const otherTeleport = teleports.find((t) => t.properties.pairId === this.properties.pairId && t !== this);
        if (bot.previousPosition?.x === otherTeleport.position.x &&
            bot.previousPosition?.y === otherTeleport.position.y) {
            return;
        }
        if (board.trySetGameObjectPosition(bot, otherTeleport.position)) {
            board.notifyGameObjectEvent(this, "TELEPORTED");
        }
    }
}
exports.TeleportGameObject = TeleportGameObject;
//# sourceMappingURL=teleport.js.map