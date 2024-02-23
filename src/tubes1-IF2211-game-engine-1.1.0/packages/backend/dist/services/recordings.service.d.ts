import { BotRegistrationsRepository, RecordingsRepository } from "../db";
import { CustomLogger } from "../logger";
import { RecordingListDto, RecordingPublicDto } from "../models";
import { ISaveRecording } from "../types";
export declare class RecordingsService {
    private readonly repo;
    private logger;
    private botsRepo;
    private states;
    private stateIndex;
    constructor(repo: RecordingsRepository, logger: CustomLogger, botsRepo: BotRegistrationsRepository);
    setup(numberOfBoards: number, numberOfStates: number): void;
    record(boardIndex: number, state: Object): void;
    getRecording(boardIndex: number): Array<Object>;
    save(data: ISaveRecording): Promise<void>;
    allBySeasonIdList(seasonId: string): Promise<RecordingListDto[]>;
    getById(id: string): Promise<RecordingPublicDto>;
    purgeOld(seasonId: string): Promise<void>;
    getLastScore(botName: string): Promise<number>;
    reset(): Promise<void>;
}
//# sourceMappingURL=recordings.service.d.ts.map