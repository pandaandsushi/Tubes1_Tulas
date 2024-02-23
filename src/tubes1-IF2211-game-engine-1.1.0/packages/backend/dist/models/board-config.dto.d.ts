import { IBoardConfigDto } from "@etimo/diamonds2-types";
import { ISeason } from "../types";
export declare class BoardConfigDto implements IBoardConfigDto {
    id: string;
    seasonId: string;
    inventorySize: number;
    canTackle: boolean;
    teleporters: number;
    teleportRelocation: number;
    height: number;
    width: number;
    minimumDelayBetweenMoves: number;
    sessionLength: number;
    static fromSeasonWithBoardConfig(entity: ISeason): BoardConfigDto;
}
//# sourceMappingURL=board-config.dto.d.ts.map