import { BotProviderConfig, Position } from "@etimo/diamonds2-types";
import { IBot } from "../../../types";
import { Board } from "../../board";
import { AbstractGameObjectProvider } from "../abstract-game-object-providers";
import { BotGameObject } from "./bot";
export declare class BotProvider extends AbstractGameObjectProvider<BotProviderConfig> {
    constructor(config: BotProviderConfig);
    onBotJoined(bot: IBot, board: Board): void;
    protected getInitializedBot(data: Partial<IBot>, base: Position, board: Board): BotGameObject;
}
//# sourceMappingURL=bot-provider.d.ts.map