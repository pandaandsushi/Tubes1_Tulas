import BoardFeatureDto from "./board-feature.dto";
import { GameObjectDto } from "./game-object.dto";
export declare class BoardDto {
    id: number;
    width: number;
    height: number;
    minimumDelayBetweenMoves: number;
    gameObjects: GameObjectDto[];
    features: BoardFeatureDto[];
}
//# sourceMappingURL=board.dto.d.ts.map