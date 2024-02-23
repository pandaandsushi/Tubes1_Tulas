import { Position, TeleportProperties } from "@etimo/diamonds2-types";
import { Board } from "../../board";
import { AbstractGameObject } from "../abstract-game-object";
export declare class TeleportGameObject extends AbstractGameObject {
    private readonly _properties;
    constructor(position: Position, _properties: TeleportProperties);
    get properties(): TeleportProperties;
    onGameObjectEntered(gameObject: AbstractGameObject, board: Board): void;
}
//# sourceMappingURL=teleport.d.ts.map