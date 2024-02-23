import { DummyBotProviderConfig } from "@etimo/diamonds2-types";
import { IBot } from "../../../types";
import { Board } from "../../board";
import { AbstractGameObject } from "../abstract-game-object";
import { BotProvider } from "../bot/bot-provider";
export declare class DummyBotProvider extends BotProvider {
    constructor(config: DummyBotProviderConfig);
    onBoardInitialized(board: Board): void;
    onBotJoined(bot: IBot, board: Board): void;
    onGameObjectsRemoved(board: Board, gameObjects: AbstractGameObject[]): void;
}
//# sourceMappingURL=dummy-bot-provider.d.ts.map