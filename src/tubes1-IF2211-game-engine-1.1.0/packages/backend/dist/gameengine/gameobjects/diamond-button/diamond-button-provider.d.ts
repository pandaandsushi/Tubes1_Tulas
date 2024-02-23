import { AbstractGameObjectProvider } from "../abstract-game-object-providers";
import { AbstractGameObject } from "../abstract-game-object";
import { Board } from "../../board";
export declare class DiamondButtonProvider extends AbstractGameObjectProvider {
    /**
     * Listen for when game objects are removed and generate new button when needed.
     */
    onGameObjectsRemoved(board: Board, gameObjects: AbstractGameObject[]): void;
    onBoardInitialized(board: Board): void;
    private generateNewButton;
}
//# sourceMappingURL=diamond-button-provider.d.ts.map