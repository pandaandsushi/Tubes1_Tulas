import { PrismaService } from "../../services/prisma.service";
import { IHighscore, INewHighscore } from "../../types";
export declare class HighscoresRepository {
    private prisma;
    private entity;
    constructor(prisma: PrismaService);
    allBySeasonIdRaw(seasonId: string, currentSeasonId: string, limit?: number): Promise<IHighscore[]>;
    getBotScore(botName: string): Promise<IHighscore[]>;
    getBestBotScore(botId: string, seasonId: string): Promise<IHighscore | null>;
    updateBestBotScore(botId: string, seasonId: string, score: number): Promise<void>;
    create(data: INewHighscore): Promise<IHighscore>;
    delete(botId: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
//# sourceMappingURL=highscores.repository.d.ts.map