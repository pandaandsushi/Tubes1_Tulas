import { IRecording } from "../types";
export declare class RecordingDto {
    botName: string;
    score: number;
    board: number;
    seasonId: string;
    recording: string;
    static from(dto: RecordingDto): RecordingDto;
    static fromEntity(entity: IRecording): RecordingDto;
}
//# sourceMappingURL=recording.dto.d.ts.map