"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordingDto = void 0;
class RecordingDto {
    botName;
    score;
    board;
    seasonId;
    recording;
    static from(dto) {
        const recordingObj = new RecordingDto();
        recordingObj.botName = dto.botName;
        recordingObj.score = dto.score;
        recordingObj.seasonId = dto.seasonId;
        return recordingObj;
    }
    static fromEntity(entity) {
        return this.from({
            botName: entity.bot?.name ?? "",
            score: entity.score,
            seasonId: entity.seasonId,
            recording: entity.recording,
            board: entity.board,
        });
    }
}
exports.RecordingDto = RecordingDto;
//# sourceMappingURL=recording.dto.js.map