import { PrismaService } from "../../services/prisma.service";
import { INewTeam, ITeam } from "../../types";
export declare class TeamsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    all(): Promise<ITeam[]>;
    getByAbbreviation(abbreviation: string): Promise<ITeam | null>;
    create(data: INewTeam): Promise<ITeam>;
    get(field: string, data: string): Promise<ITeam | null>;
}
//# sourceMappingURL=teams.repository.d.ts.map