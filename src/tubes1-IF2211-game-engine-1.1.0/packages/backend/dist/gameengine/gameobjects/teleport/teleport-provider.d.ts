import { TeleportProviderConfig } from "@etimo/diamonds2-types";
import { Board } from "../../board";
import { AbstractGameObjectProvider } from "../abstract-game-object-providers";
export declare class TeleportProvider extends AbstractGameObjectProvider<TeleportProviderConfig> {
    constructor(config: TeleportProviderConfig);
    onBoardInitialized(board: Board): void;
    private generateTeleports;
}
//# sourceMappingURL=teleport-provider.d.ts.map