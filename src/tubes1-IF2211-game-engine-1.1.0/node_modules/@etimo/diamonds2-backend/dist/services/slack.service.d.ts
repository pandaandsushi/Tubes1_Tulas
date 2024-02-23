import { BoardConfigService } from "./board-config.service";
import { HighscoresService } from "./highscores.service";
import { SeasonsService } from "./seasons.service";
import { TeamsService } from "./teams.service";
export declare class SlackService {
    private seasonsService;
    private teamsService;
    private highscoresService;
    private boardConfigService;
    constructor(seasonsService: SeasonsService, teamsService: TeamsService, highscoresService: HighscoresService, boardConfigService: BoardConfigService);
    getAllSeasons(input: any): Promise<void>;
    getSeasonModal(input: any): Promise<void>;
    getAllTeams(input: any): Promise<void>;
    private getWinners;
    getTeamModal(input: any): Promise<void>;
    handleInteract(input: any): Promise<{
        response_action: string;
        errors: {
            [x: number]: any;
        };
    } | undefined>;
    private addSeason;
    private addTeam;
    private showWinners;
    private parseValue;
    private actions;
}
//# sourceMappingURL=slack.service.d.ts.map