import { MoveDirection } from "../enums";
import { OperationQueueBoard } from "../gameengine";
import { CustomLogger } from "../logger";
import { BoardDto, BoardMetadataDto } from "../models";
import { IBoardConfig } from "../types";
import { BoardConfigService } from "./board-config.service";
import { BotsService } from "./bots.service";
import { HighscoresService } from "./highscores.service";
import { RecordingsService } from "./recordings.service";
import { SeasonsService } from "./seasons.service";
export declare class BoardsService {
    private botsService;
    private seasonsService;
    private recordingsService;
    private boardConfigService;
    private highscoresService;
    private logger;
    private static nextBoardId;
    private boards;
    private ephemeralBoards;
    constructor(botsService: BotsService, seasonsService: SeasonsService, recordingsService: RecordingsService, boardConfigService: BoardConfigService, highscoresService: HighscoresService, logger: CustomLogger, numberOfBoards: number, numEphemeralBoards: number);
    private initialize;
    private _getAllBoards;
    /**
     * Return all boards.
     */
    getAll(): BoardDto[];
    getAllMetadata(): BoardMetadataDto[];
    /**
     * Return a specific board.
     * @param id The id of the board to return.
     */
    getById(id: number): BoardDto;
    /**
     *
     * @param preferredBoardId
     * @param bot
     */
    join(botId: string, preferredBoardId?: number): Promise<BoardDto>;
    private returnAndSaveDto;
    move(botId: string, direction: MoveDirection): Promise<BoardDto>;
    private moveIsRateLimited;
    private getBoardById;
    private getBoardFromBotId;
    /**
     * Convert a MoveDirection enum to a delta Position.
     * @param direction
     */
    private directionToDelta;
    /**
     * Convert a board to a dto.
     * @param board
     */
    private getAsDto;
    private getAsMetadataDto;
    /**
     * Create an example board for debugging purpose.
     */
    createInMemoryBoards(numberOfBoards: number, boardConfig: IBoardConfig): Promise<OperationQueueBoard[]>;
    private tooManyRateLimitViolations;
}
//# sourceMappingURL=board.service.d.ts.map