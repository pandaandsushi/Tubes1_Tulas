import { TeamDto } from "../models";
import { TeamsService } from "../services";
export declare class TeamsController {
    private teamsService;
    constructor(teamsService: TeamsService);
    listAll(): Promise<TeamDto[]>;
}
//# sourceMappingURL=teams.controller.d.ts.map