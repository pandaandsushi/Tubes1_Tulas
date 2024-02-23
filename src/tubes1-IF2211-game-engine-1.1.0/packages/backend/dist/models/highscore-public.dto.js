"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighscorePublicDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class HighscorePublicDto {
    botName;
    score;
    seasonId;
    team;
    teamLogotype;
    static fromEntity(entity) {
        return {
            botName: entity.bot.name,
            score: entity.score,
            seasonId: entity.seasonId,
            team: entity.bot.team.name,
            teamLogotype: entity.bot.team.logotypeUrl,
        };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HighscorePublicDto.prototype, "botName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], HighscorePublicDto.prototype, "score", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HighscorePublicDto.prototype, "seasonId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HighscorePublicDto.prototype, "team", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HighscorePublicDto.prototype, "teamLogotype", void 0);
exports.HighscorePublicDto = HighscorePublicDto;
//# sourceMappingURL=highscore-public.dto.js.map