import { Position } from "@etimo/diamonds2-types";
import { Board } from "../board";
export declare abstract class AbstractGameObject {
    private positions;
    private static nextId;
    private readonly _id;
    constructor(startPosition: Position);
    get x(): number;
    get y(): number;
    get id(): number;
    get position(): Position;
    set position(newPosition: Position);
    get previousPosition(): {
        x: number;
        y: number;
    } | null;
    get properties(): object;
    clearPositions(): void;
    canGameObjectEnter(gameObject: AbstractGameObject, board: Board): boolean;
    onGameObjectEntered(gameObject: AbstractGameObject, board: Board): void;
    canGameObjectLeave(gameObject: AbstractGameObject, board: Board): boolean;
    onGameObjectLeft(gameObject: AbstractGameObject, board: Board): void;
    onGameObjectCallbackNotified(board: Board, intervalMs: number): void;
    onGameObjectRemoved(board: Board): void;
    onEvent(board: Board, sender: AbstractGameObject, message: string, payload?: Object): void;
    toLogString(): string;
}
//# sourceMappingURL=abstract-game-object.d.ts.map