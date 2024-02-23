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
exports.HighscoresService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../db");
const seasons_service_1 = require("./seasons.service");
let HighscoresService = class HighscoresService {
    seasonsService;
    repo;
    constructor(seasonsService, repo) {
        this.seasonsService = seasonsService;
        this.repo = repo;
    }
    async addOrUpdate(input) {
        const seasonAllTimeBest = await this.getSeasonBestHighScore(input.seasonId);
        if (await this.isNewHighScore(input)) {
            await this.create(input);
        }
        return seasonAllTimeBest < input.score;
    }
    async getBotScore(newScore) {
        return this.repo.getBotScore(newScore.botId);
    }
    async isNewHighScore(newScore) {
        let isNew = true;
        const season = await this.seasonsService.getCurrentSeason();
        const resultSetHighScore = await this.repo.getBestBotScore(newScore.botId, newScore.seasonId);
        if (resultSetHighScore) {
            if (resultSetHighScore.score < newScore.score) {
                await this.repo.updateBestBotScore(newScore.botId, newScore.seasonId, newScore.score);
                isNew = false;
            }
            else {
                isNew = false;
            }
        }
        return isNew;
    }
    async getSeasonBestHighScore(seasonId) {
        const existingBest = await this.allBySeasonId(seasonId, 1);
        if (existingBest.length === 0) {
            return 0;
        }
        return existingBest[0].score;
    }
    async allBySeasonId(seasonId, limit = 0) {
        const currentSeason = await this.seasonsService.getCurrentSeason();
        return this.repo.allBySeasonIdRaw(seasonId, currentSeason.id);
    }
    async allBySeasonIdPrivate(seasonId, limit = 0) {
        const highScores = await this.allBySeasonId(seasonId, limit);
        return highScores.map((e) => ({
            botName: e.bot.name,
            email: e.bot.email,
            score: e.score,
        }));
    }
    async allBySeasonIdPublic(seasonId) {
        return this.allBySeasonId(seasonId);
    }
    async create(data) {
        return this.repo.create(data);
    }
    async deleteFor(botId) {
        return this.repo.delete(botId);
    }
};
HighscoresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [seasons_service_1.SeasonsService,
        db_1.HighscoresRepository])
], HighscoresService);
exports.HighscoresService = HighscoresService;
//# sourceMappingURL=highscores.service.js.map