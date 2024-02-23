import { HighscoresRepository } from "../db";
import { HighscorePrivateDto } from "../models";
import { IHighscore, INewHighscore } from "../types";
import { SeasonsService } from "./seasons.service";
export declare class HighscoresService {
    private seasonsService;
    private repo;
    constructor(seasonsService: SeasonsService, repo: HighscoresRepository);
    addOrUpdate(input: INewHighscore): Promise<boolean>;
    getBotScore(newScore: IHighscore): Promise<IHighscore[]>;
    private isNewHighScore;
    private getSeasonBestHighScore;
    private allBySeasonId;
    allBySeasonIdPrivate(seasonId: string, limit?: number): Promise<HighscorePrivateDto[]>;
    allBySeasonIdPublic(seasonId: string): Promise<IHighscore[]>;
    create(data: INewHighscore): Promise<IHighscore>;
    deleteFor(botId: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
//# sourceMappingURL=highscores.service.d.ts.map