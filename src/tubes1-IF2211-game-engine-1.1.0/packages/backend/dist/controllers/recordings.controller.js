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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordingsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const models_1 = require("../models");
const services_1 = require("../services");
let RecordingsController = class RecordingsController {
    recordingsService;
    constructor(recordingsService) {
        this.recordingsService = recordingsService;
    }
    /**
     * Returns all highscores on a specific season.
     *
     * @param season The name of the season.
     */
    async list(seasonId) {
        return await this.recordingsService.allBySeasonIdList(seasonId);
    }
    getLastScore(botName) {
        return this.recordingsService.getLastScore(botName);
    }
    /**
     * Return a specific recording.
     *
     * @param id The id of the recording.
     */
    find(id) {
        return this.recordingsService.getById(id);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Returns recordings by season",
        isArray: true,
        type: models_1.RecordingListDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: "Season not found",
    }),
    (0, common_1.Get)("seasons/:seasonId"),
    __param(0, (0, common_1.Param)("seasonId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecordingsController.prototype, "list", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Returns last score of a bot",
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: "Bot name or last score not found",
    }),
    (0, common_1.Get)("score/last"),
    __param(0, (0, common_1.Query)("botName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecordingsController.prototype, "getLastScore", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Returns specific recording",
        type: models_1.RecordingPublicDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: "Recording or season not found",
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecordingsController.prototype, "find", null);
RecordingsController = __decorate([
    (0, swagger_1.ApiTags)("Recordings"),
    (0, common_1.Controller)("api/recordings"),
    __metadata("design:paramtypes", [services_1.RecordingsService])
], RecordingsController);
exports.RecordingsController = RecordingsController;
//# sourceMappingURL=recordings.controller.js.map