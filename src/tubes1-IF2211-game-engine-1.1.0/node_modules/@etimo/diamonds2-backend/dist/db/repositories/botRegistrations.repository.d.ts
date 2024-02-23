import { PrismaService } from "../../services/prisma.service";
import { IBot, INewBot } from "../../types";
export declare class BotRegistrationsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: INewBot): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        email: string;
        createTimeStamp: Date;
        updateTimeStamp: Date;
        password: string | null;
        teamId: string;
    }, unknown, never> & {}>;
    delete(bot: IBot): Promise<IBot>;
    getByEmail(email: string): Promise<IBot | null>;
    getByName(name: string): Promise<IBot | null>;
    get(id: string): Promise<IBot | null>;
}
//# sourceMappingURL=botRegistrations.repository.d.ts.map