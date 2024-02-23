import { ITeamDto } from "@etimo/diamonds2-types";
import { ITeam } from "../types";
export declare class TeamDto implements ITeamDto {
    id: string;
    name: string;
    abbreviation: string;
    logotypeUrl: string;
    static from(dto: TeamDto): TeamDto;
    static create(dto: TeamDto): TeamDto;
    static fromEntity(entity: ITeam): TeamDto;
}
//# sourceMappingURL=team.dto.d.ts.map