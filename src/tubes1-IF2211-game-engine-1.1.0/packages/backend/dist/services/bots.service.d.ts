import { BotRegistrationsRepository } from "../db";
import { BotRecoveryDto, BotRegistrationDto } from "../models";
import { IBot, INewBot } from "../types";
import { TeamsService } from "./teams.service";
export declare class BotsService {
    private teamsService;
    private repo;
    constructor(teamsService: TeamsService, repo: BotRegistrationsRepository);
    add(input: BotRegistrationDto): Promise<IBot>;
    get(id: string): Promise<IBot | null>;
    create(dto: INewBot): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        email: string;
        createTimeStamp: Date;
        updateTimeStamp: Date;
        password: string | null;
        teamId: string;
    }, unknown, never> & {}>;
    delete(dto: IBot): Promise<IBot>;
    getByEmailAndPassword(botRecoveryDto: BotRecoveryDto): Promise<IBot>;
    private hashPassword;
}
//# sourceMappingURL=bots.service.d.ts.map