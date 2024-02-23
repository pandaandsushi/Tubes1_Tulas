import { RecordingListDto, RecordingPublicDto } from "../models";
import { RecordingsService } from "../services";
export declare class RecordingsController {
    private recordingsService;
    constructor(recordingsService: RecordingsService);
    /**
     * Returns all highscores on a specific season.
     *
     * @param season The name of the season.
     */
    list(seasonId: string): Promise<RecordingListDto[]>;
    getLastScore(botName: string): Promise<number>;
    /**
     * Return a specific recording.
     *
     * @param id The id of the recording.
     */
    find(id: string): Promise<RecordingPublicDto>;
}
//# sourceMappingURL=recordings.controller.d.ts.map