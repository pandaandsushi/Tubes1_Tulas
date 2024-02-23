import { PrismaService } from "../../services/prisma.service";
import { IBoardConfig, INewBoardConfig } from "../../types";
export declare class BoardConfigRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getBoardConfigById(id: string): Promise<IBoardConfig | null>;
    create(newBoardConfig: INewBoardConfig): Promise<IBoardConfig>;
}
//# sourceMappingURL=boardConfig.repository.d.ts.map