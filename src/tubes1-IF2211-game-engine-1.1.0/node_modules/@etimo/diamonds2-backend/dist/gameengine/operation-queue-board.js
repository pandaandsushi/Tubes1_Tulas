"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationQueueJoinEvent = exports.OperationQueueMoveEvent = exports.OperationQueueEvent = exports.OperationQueueBoard = void 0;
const async = __importStar(require("async"));
const board_1 = require("./board");
/**
 * A class that wraps a board with an operation queue. This class will abstract the handling of operations
 * on the board to prevent multiple simultaneous operations at the same time.
 *
 * At the moment the following operations are handled in a queue:
 * * move
 * * join
 */
class OperationQueueBoard extends board_1.Board {
    logger;
    opQueue;
    constructor(id, config, gameObjectProviders, logger) {
        super(id, config, gameObjectProviders, logger);
        this.logger = logger;
        this.setupOperationQueue();
    }
    /**
     * The board uses an operation queue to handle multiple requests to operate on the board.
     * All operations on the board are queued and handled one after another.
     * Currently all move commands are handled using this queue.
     */
    setupOperationQueue() {
        // Move queue
        const sleep = (m) => new Promise((r) => setTimeout(r, m));
        this.opQueue = async.queue(async (t, cb) => {
            try {
                const res = await t.run();
                cb(res, null);
            }
            catch (e) {
                cb(null, e);
            }
        });
    }
    /**
     * Queue a join to a board. Will prevent multiple simultaneous calls to collide.
     * @param bot
     */
    async enqueueJoin(bot) {
        // Queue join
        const event = new OperationQueueJoinEvent(bot, this);
        return new Promise((resolve, reject) => {
            this.opQueue.push(event, (err) => {
                if (err) {
                    if (err instanceof TypeError) {
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    /**
     * Queue a move on a board. Will prevent multiple simultaneous calls to collide.
     * @param bot
     */
    async enqueueMove(bot, delta) {
        const event = new OperationQueueMoveEvent(bot, this, delta);
        return new Promise((resolve, reject) => {
            this.opQueue.push(event, (err) => {
                if (err) {
                    if (err instanceof TypeError) {
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }
                }
                else {
                    resolve(true);
                }
            });
        });
    }
}
exports.OperationQueueBoard = OperationQueueBoard;
class OperationQueueEvent {
    bot;
    board;
    queuedAt = new Date();
    constructor(bot, board) {
        this.bot = bot;
        this.board = board;
    }
    run() {
        throw Error("Not implemented");
    }
}
exports.OperationQueueEvent = OperationQueueEvent;
class OperationQueueMoveEvent extends OperationQueueEvent {
    bot;
    board;
    delta;
    constructor(bot, board, delta) {
        super(bot, board);
        this.bot = bot;
        this.board = board;
        this.delta = delta;
    }
    run() {
        return this.board.move(this.bot, this.delta);
    }
}
exports.OperationQueueMoveEvent = OperationQueueMoveEvent;
class OperationQueueJoinEvent extends OperationQueueEvent {
    run() {
        return this.board.join(this.bot);
    }
}
exports.OperationQueueJoinEvent = OperationQueueJoinEvent;
//# sourceMappingURL=operation-queue-board.js.map