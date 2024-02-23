import { IBot } from "../../types";
import { Board } from "../board";
import { AbstractGameObject } from "./abstract-game-object";
export declare abstract class AbstractGameObjectProvider<T = {}> {
    config: Readonly<T>;
    constructor(config?: T);
    onBoardInitialized(board: Board): void;
    onBotJoined(bot: IBot, board: Board): void;
    onBotFinished(bot: IBot, board: Board): void;
    onGameObjectsRemoved(board: Board, gameObjects: AbstractGameObject[]): void;
    onGameObjectsAdded(board: Board, gameObjects: AbstractGameObject[]): void;
}
//# sourceMappingURL=abstract-game-object-providers.d.ts.map