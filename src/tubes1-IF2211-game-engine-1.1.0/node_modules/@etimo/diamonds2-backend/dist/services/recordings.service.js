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
exports.RecordingsService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../db");
const errors_1 = require("../errors");
const logger_1 = require("../logger");
let RecordingsService = class RecordingsService {
    repo;
    logger;
    botsRepo;
    states = [];
    stateIndex = [];
    constructor(repo, logger, botsRepo) {
        this.repo = repo;
        this.logger = logger;
        this.botsRepo = botsRepo;
    }
    setup(numberOfBoards, numberOfStates) {
        this.logger.info(`Setting up state recorder for ${numberOfBoards} boards with ${numberOfStates} states`);
        this.states = new Array(numberOfBoards).fill(null).map((_) => {
            const arr = new Array(numberOfStates).fill(null);
            Object.seal(arr);
            return arr;
        });
        this.stateIndex = new Array(numberOfBoards).fill(0);
    }
    record(boardIndex, state) {
        const arr = this.states[boardIndex];
        arr[this.stateIndex[boardIndex]] = state;
        this.stateIndex[boardIndex] =
            (this.stateIndex[boardIndex] + 1) % this.states[boardIndex].length;
    }
    getRecording(boardIndex) {
        const currentStateIndex = this.stateIndex[boardIndex];
        const states = this.states[boardIndex];
        return new Array(states.length)
            .fill(0)
            .map((_, index) => states[(currentStateIndex + index) % states.length])
            .filter((r) => r);
    }
    async save(data) {
        this.logger.debug(`Saving new recording for ${data.botId} with score ${data.score}`);
        await this.repo.create({
            ...data,
            recording: JSON.stringify(this.getRecording(data.board)),
        });
        await this.purgeOld(data.seasonId);
    }
    async allBySeasonIdList(seasonId) {
        const data = await this.repo.allBySeasonIdRaw(seasonId);
        if (data.length === 0) {
            throw new errors_1.NotFoundError("Season not found");
        }
        return data.map((e) => ({
            board: e.board,
            botName: "",
            created: e.createTimeStamp,
            recordingId: e.id,
            score: e.score,
        }));
    }
    async getById(id) {
        const data = await this.repo.getById(id);
        if (data.length === 0) {
            throw new errors_1.NotFoundError("Data not found");
        }
        return data.map((e) => ({
            board: e.board,
            botName: "",
            created: e.createTimeStamp,
            recording: e.recording,
            score: e.score,
            seasonId: e.seasonId,
        }))[0];
    }
    async purgeOld(seasonId) {
        const maxEntries = 10;
        const existing = await this.repo.getScores(seasonId, maxEntries + 1);
        if (existing.length > maxEntries) {
            // Remove if we have more than 10 recordings
            await this.repo.deleteRecordingsWithLowScore(seasonId, existing[maxEntries - 1]);
        }
    }
    async getLastScore(botName) {
        const bot = await this.botsRepo.getByName(botName);
        if (!bot) {
            throw new errors_1.NotFoundError("Bot not found");
        }
        const lastScore = await this.repo.getLastScore(bot.id);
        if (lastScore === undefined) {
            throw new errors_1.NotFoundError("Last score not found");
        }
        return lastScore;
    }
    async reset() {
        this.repo.reset();
    }
};
RecordingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_1.RecordingsRepository,
        logger_1.CustomLogger,
        db_1.BotRegistrationsRepository])
], RecordingsService);
exports.RecordingsService = RecordingsService;
//# sourceMappingURL=recordings.service.js.map