"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighscorePrivateDto = void 0;
class HighscorePrivateDto {
    botName;
    score;
    email;
    static from(dto) {
        const highScoreObj = new HighscorePrivateDto();
        highScoreObj.botName = dto.botName;
        highScoreObj.score = dto.score;
        highScoreObj.email = dto.email;
        return highScoreObj;
    }
    static fromRawDataObject(data) {
        // Used by allBySeasonId in hishscore service
        // Data includes raw data from highScore table and teams table.
        return this.from({
            // @ts-ignore
            botName: data["highScores_botName"],
            // @ts-ignore
            score: data["highScores_score"],
            // @ts-ignore
            email: data["bot_email"],
        });
    }
}
exports.HighscorePrivateDto = HighscorePrivateDto;
//# sourceMappingURL=highscore-private.dto.js.map