import { PrismaService } from "../../services/prisma.service";
import { INewSeason, ISeason } from "../../types";
export declare class SeasonsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: INewSeason): Promise<ISeason>;
    getById(seasonId: string, includeBoardConfig: boolean): Promise<ISeason>;
    getCurrentSeason(): Promise<ISeason>;
    getAll(): Promise<ISeason[]>;
    getByName(name: string): Promise<ISeason | null>;
    dateCollision(startDate: Date, endDate: Date): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        startDate: Date;
        endDate: Date;
        createTimeStamp: Date;
        updateTimeStamp: Date;
        boardConfigId: string;
    }, unknown, never> & {}) | null>;
}
//# sourceMappingURL=seasons.repository.d.ts.map