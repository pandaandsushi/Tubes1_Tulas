"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTestBoard = void 0;
const board_1 = require("../board");
const silent_logger_1 = require("./silent-logger");
function createTestBoard(providers = []) {
    return new board_1.Board(1, {
        height: 10,
        width: 10,
        minimumDelayBetweenMoves: 100,
        sessionLength: 10,
        canTackle: true,
        inventorySize: 3,
        teleportRelocation: 30,
        teleporters: 2,
        dummyBots: 2,
        updateTimeStamp: new Date(),
        createTimeStamp: new Date(),
        separateBoards: false,
        id: "",
    }, providers, new silent_logger_1.SilentLogger());
}
exports.createTestBoard = createTestBoard;
//# sourceMappingURL=test-board.js.map