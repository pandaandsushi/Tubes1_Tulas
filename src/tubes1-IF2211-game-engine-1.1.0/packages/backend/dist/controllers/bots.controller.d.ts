import { BoardDto, BotRecoveryDto, BotRegistrationDto, BotRegistrationPublicDto, JoinInputDto, MoveInputDto } from "../models";
import { BoardsService, BotsService } from "../services";
export declare class BotsController {
    private botsService;
    private boardsService;
    constructor(botsService: BotsService, boardsService: BoardsService);
    /**
     * Get information for a registered bot.
     *
     * @param id The secret id of the previously registered bot.
     */
    find(id: string): Promise<BotRegistrationPublicDto>;
    /**
     * Register a new bot.
     *
     * @param botRegistration
     */
    create(botRegistration: BotRegistrationDto): Promise<BotRegistrationPublicDto>;
    recover(botRecoveryDto: BotRecoveryDto): Promise<BotRegistrationPublicDto>;
    join(botId: string, input: JoinInputDto): Promise<BoardDto>;
    move(botId: string, input: MoveInputDto): Promise<BoardDto>;
}
//# sourceMappingURL=bots.controller.d.ts.map