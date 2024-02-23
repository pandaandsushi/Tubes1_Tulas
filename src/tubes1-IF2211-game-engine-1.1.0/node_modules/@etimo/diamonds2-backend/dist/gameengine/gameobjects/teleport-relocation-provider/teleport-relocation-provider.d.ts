import { TeleportRelocationProviderConfig } from "@etimo/diamonds2-types";
import { Board } from "../../board";
import { AbstractGameObjectProvider } from "../abstract-game-object-providers";
/**
 * This provider moves all teleporters on the board when a certain time has passed.
 */
export declare class TeleportRelocationProvider extends AbstractGameObjectProvider<TeleportRelocationProviderConfig> {
    onBoardInitialized(board: Board): void;
}
//# sourceMappingURL=teleport-relocation-provider.d.ts.map