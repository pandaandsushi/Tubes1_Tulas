import { SeasonsRepository } from "../db";
import { INewSeason, ISeason } from "../types";
export declare class SeasonsService {
    private repo;
    constructor(repo: SeasonsRepository);
    getOffSeason(): Promise<ISeason>;
    getSeason(seasonId: string): Promise<ISeason>;
    getCurrentSeason(): Promise<ISeason>;
    all(): Promise<ISeason[]>;
    add(data: INewSeason): Promise<ISeason>;
    create(data: INewSeason): Promise<ISeason>;
}
//# sourceMappingURL=seasons.service.d.ts.map