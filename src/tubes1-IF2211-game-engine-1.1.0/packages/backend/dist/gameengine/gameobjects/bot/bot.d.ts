import { BotGameObjectProperties, Position } from "@etimo/diamonds2-types";
import { AbstractGameObject } from "../abstract-game-object";
export type IBotGameObject = {
    base: Position;
    diamonds: number;
    timeJoined: Date;
    expiresAt: Date;
    inventorySize: number;
    canTackle: boolean;
    score: number;
    name: string;
    nextMoveAvailableAt: Date;
    botId: string;
};
export declare class BotGameObject extends AbstractGameObject {
    base: Position;
    diamonds: number;
    timeJoined: Date;
    expiresAt: Date;
    inventorySize: number;
    canTackle: boolean;
    score: number;
    name: string;
    nextMoveAvailableAt: Date;
    botId: string;
    constructor(options: IBotGameObject);
    get properties(): BotGameObjectProperties;
    onGameObjectEntered(gameObject: AbstractGameObject): void;
    canGameObjectEnter(gameObject: AbstractGameObject): boolean;
}
//# sourceMappingURL=bot.d.ts.map