import { Position } from "@etimo/diamonds2-types";
import { IBoardConfig, IBot } from "../types";
import { Board } from "./board";
import { AbstractGameObjectProvider } from "./gameobjects/abstract-game-object-providers";
/**
 * A class that wraps a board with an operation queue. This class will abstract the handling of operations
 * on the board to prevent multiple simultaneous operations at the same time.
 *
 * At the moment the following operations are handled in a queue:
 * * move
 * * join
 */
export declare class OperationQueueBoard extends Board {
    protected logger: any;
    private opQueue;
    constructor(id: number, config: IBoardConfig, gameObjectProviders: AbstractGameObjectProvider[], logger: any);
    /**
     * The board uses an operation queue to handle multiple requests to operate on the board.
     * All operations on the board are queued and handled one after another.
     * Currently all move commands are handled using this queue.
     */
    private setupOperationQueue;
    /**
     * Queue a join to a board. Will prevent multiple simultaneous calls to collide.
     * @param bot
     */
    enqueueJoin(bot: IBot): Promise<boolean>;
    /**
     * Queue a move on a board. Will prevent multiple simultaneous calls to collide.
     * @param bot
     */
    enqueueMove(bot: IBot, delta: Position): Promise<boolean>;
}
export declare class OperationQueueEvent {
    protected bot: IBot;
    protected board: Board;
    queuedAt: Date;
    constructor(bot: IBot, board: Board);
    run(): Promise<boolean>;
}
export declare class OperationQueueMoveEvent extends OperationQueueEvent {
    protected bot: IBot;
    protected board: Board;
    protected delta: Position;
    constructor(bot: IBot, board: Board, delta: Position);
    run(): Promise<boolean>;
}
export declare class OperationQueueJoinEvent extends OperationQueueEvent {
    run(): Promise<boolean>;
}
//# sourceMappingURL=operation-queue-board.d.ts.map