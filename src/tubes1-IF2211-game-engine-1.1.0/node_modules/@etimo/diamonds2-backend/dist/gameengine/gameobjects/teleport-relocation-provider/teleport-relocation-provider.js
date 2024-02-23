"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeleportRelocationProvider = void 0;
const abstract_game_object_providers_1 = require("../abstract-game-object-providers");
const teleport_1 = require("../teleport/teleport");
/**
 * This provider moves all teleporters on the board when a certain time has passed.
 */
class TeleportRelocationProvider extends abstract_game_object_providers_1.AbstractGameObjectProvider {
    onBoardInitialized(board) {
        setInterval((_) => {
            const teleporters = board.getGameObjectsByType(teleport_1.TeleportGameObject);
            teleporters.forEach((t) => {
                const inititalPosition = t.position;
                // Continue generating new position until it's not the same as initial
                while ((t.position = board.getEmptyPosition()) == inititalPosition) { }
            });
        }, this.config.seconds * 1000);
    }
}
exports.TeleportRelocationProvider = TeleportRelocationProvider;
//# sourceMappingURL=teleport-relocation-provider.js.map