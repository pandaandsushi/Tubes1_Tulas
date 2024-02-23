import { AbstractGameObject } from "../abstract-game-object";
import { IBotGameObject } from "../bot/bot";
export declare class BaseGameObject extends AbstractGameObject {
    private bot;
    constructor(bot: IBotGameObject);
    get properties(): {
        name: string;
    };
    onGameObjectEntered(gameObject: AbstractGameObject): void;
}
//# sourceMappingURL=base.d.ts.map