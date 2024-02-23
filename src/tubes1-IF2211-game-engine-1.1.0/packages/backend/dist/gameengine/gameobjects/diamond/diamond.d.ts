import { DiamondGameObjectProperties, Position } from "@etimo/diamonds2-types";
import { Board } from "../../board";
import { AbstractGameObject } from "../abstract-game-object";
export declare class DiamondGameObject extends AbstractGameObject {
    points: number;
    constructor(position: Position, points: number);
    get properties(): DiamondGameObjectProperties;
    /**
     * Remove the diamond when a bot enters and put it in the bot's inventory.
     */
    onGameObjectEntered(gameObject: AbstractGameObject, board: Board): void;
}
//# sourceMappingURL=diamond.d.ts.map