import { Board } from "../../board";
import { AbstractGameObject } from "../abstract-game-object";
import { AbstractGameObjectProvider } from "../abstract-game-object-providers";
export declare class BaseProvider extends AbstractGameObjectProvider {
    onGameObjectsAdded(board: Board, gameObjects: AbstractGameObject[]): void;
    onGameObjectsRemoved(board: Board, gameObjects: AbstractGameObject[]): void;
}
//# sourceMappingURL=base-provider.d.ts.map