import { DiamondProviderConfig } from "@etimo/diamonds2-types";
import { Board } from "../../board";
import { AbstractGameObjectProvider } from "../abstract-game-object-providers";
export declare class DiamondProvider extends AbstractGameObjectProvider<DiamondProviderConfig> {
    constructor(config: DiamondProviderConfig);
    onBoardInitialized(board: Board): void;
    onGameObjectsRemoved(board: Board, other: any): void;
    private generateDiamonds;
}
//# sourceMappingURL=diamond-provider.d.ts.map