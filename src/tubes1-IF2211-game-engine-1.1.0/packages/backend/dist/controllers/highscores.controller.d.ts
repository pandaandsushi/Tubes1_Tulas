import { HighscorePublicDto } from "../models";
import { HighscoresService } from "../services";
export declare class HighscoresController {
    private highscoresService;
    constructor(highscoresService: HighscoresService);
    /**
     * Returns all highscores on a specific season.
     *
     * @param season The name of the season.
     */
    find(seasonId: string): Promise<HighscorePublicDto[]>;
}
//# sourceMappingURL=highscores.controller.d.ts.map