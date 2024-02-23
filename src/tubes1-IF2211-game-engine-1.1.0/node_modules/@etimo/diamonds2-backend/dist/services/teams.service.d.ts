import { TeamsRepository } from "../db";
import { INewTeam, ITeam } from "../types";
export declare class TeamsService {
    private repo;
    constructor(repo: TeamsRepository);
    all(): Promise<ITeam[]>;
    add(data: INewTeam): Promise<ITeam>;
    getByAbbreviation(abbreviation: string): Promise<ITeam | null>;
    private create;
    private validateInput;
    private getErrorPayload;
    private isValidUrl;
}
//# sourceMappingURL=teams.service.d.ts.map