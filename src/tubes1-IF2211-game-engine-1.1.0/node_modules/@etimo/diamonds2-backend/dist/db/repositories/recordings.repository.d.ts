import { PrismaService } from "../../services/prisma.service";
import { INewRecording, IRecording } from "../../types";
export declare class RecordingsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    allBySeasonIdRaw(seasonId: string, limit?: number): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        score: number;
        board: number;
        createTimeStamp: Date;
        recording: string;
        seasonId: string;
        botId: string;
    }, unknown, never> & {})[]>;
    create(data: INewRecording): Promise<IRecording>;
    getById(id: string): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        score: number;
        board: number;
        createTimeStamp: Date;
        recording: string;
        seasonId: string;
        botId: string;
    }, unknown, never> & {})[]>;
    getScores(seasonId: string, maxEntries: number): Promise<number[]>;
    deleteRecordingsWithLowScore(seasonId: string, higestScore: number): Promise<void>;
    getLastScore(botId: string): Promise<number | undefined>;
    reset(): Promise<void>;
}
//# sourceMappingURL=recordings.repository.d.ts.map