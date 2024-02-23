"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTestBot = void 0;
const gameobjects_1 = require("../gameobjects");
// TODO: It could be nice to add memoization here to avoid same ID for bots.
function createTestBot() {
    return new gameobjects_1.BotGameObject({
        base: { x: 0, y: 0 },
        diamonds: 0,
        timeJoined: new Date(),
        expiresAt: new Date(),
        inventorySize: 5,
        canTackle: true,
        score: 0,
        name: "test",
        nextMoveAvailableAt: new Date(),
        botId: "1",
    });
}
exports.createTestBot = createTestBot;
//# sourceMappingURL=test-bot.js.map