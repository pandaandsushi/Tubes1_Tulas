import { BoardConfigDto, SeasonDto } from "../models";
import { BoardConfigService, SeasonsService } from "../services";
export declare class SeasonsController {
    private seasonsService;
    private boardConfigService;
    constructor(seasonsService: SeasonsService, boardConfigService: BoardConfigService);
    listAll(): Promise<SeasonDto[]>;
    getCurrentSeason(): Promise<SeasonDto>;
    getSeasonById(id: string): Promise<SeasonDto>;
    getSeasonRules(id: string): Promise<BoardConfigDto>;
}
//# sourceMappingURL=seasons.controller.d.ts.map