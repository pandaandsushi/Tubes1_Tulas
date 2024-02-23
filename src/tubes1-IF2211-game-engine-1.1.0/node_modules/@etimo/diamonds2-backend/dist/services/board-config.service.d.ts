import { BoardConfigRepository } from "../db";
import { INewBoardConfig } from "../types";
import { SeasonsService } from "./seasons.service";
export declare class BoardConfigService {
    private seasonsService;
    private repo;
    constructor(seasonsService: SeasonsService, repo: BoardConfigRepository);
    getCurrentBoardConfig(): Promise<import("../types").IBoardConfig | null>;
    getBoardConfig(seasonId: string): Promise<import("../types").IBoardConfig | null>;
    add(dto: INewBoardConfig): Promise<import("../types").IBoardConfig>;
}
//# sourceMappingURL=board-config.service.d.ts.map