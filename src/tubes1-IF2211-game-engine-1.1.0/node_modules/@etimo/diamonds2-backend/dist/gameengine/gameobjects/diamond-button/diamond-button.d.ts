import { AbstractGameObject } from "../abstract-game-object";
import { Board } from "../../board";
export declare class DiamondButtonGameObject extends AbstractGameObject {
    /**
     * Clear all diamonds when a bot enters the cell of this button.
     */
    onGameObjectEntered(gameObject: AbstractGameObject, board: Board): void;
}
//# sourceMappingURL=diamond-button.d.ts.map