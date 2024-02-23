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
exports.BotsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const models_1 = require("../models");
const services_1 = require("../services");
const errors_1 = require("../errors");
let BotsController = class BotsController {
    botsService;
    boardsService;
    constructor(botsService, boardsService) {
        this.botsService = botsService;
        this.boardsService = boardsService;
    }
    /**
     * Get information for a registered bot.
     *
     * @param id The secret id of the previously registered bot.
     */
    async find(id) {
        const bot = await this.botsService.get(id);
        if (!bot) {
            throw new errors_1.NotFoundError("Bot not found");
        }
        return models_1.BotRegistrationPublicDto.fromEntity(bot);
    }
    /**
     * Register a new bot.
     *
     * @param botRegistration
     */
    async create(botRegistration) {
        const bot = await this.botsService.add(botRegistration);
        return models_1.BotRegistrationPublicDto.fromEntity(bot);
    }
    async recover(botRecoveryDto) {
        const bot = await this.botsService.getByEmailAndPassword(botRecoveryDto);
        return models_1.BotRegistrationPublicDto.fromEntity(bot);
    }
    join(botId, input) {
        return this.boardsService.join(botId, input.preferredBoardId);
    }
    async move(botId, input) {
        return this.boardsService.move(botId, input.direction);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Returns bot",
        type: models_1.BotRegistrationPublicDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: "Bot not found",
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BotsController.prototype, "find", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "The bot is successfully created",
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: "Invalid input",
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: "The name and/or email is already taken",
    }),
    (0, swagger_1.ApiOperation)({
        summary: "Create new bot",
        description: "Creates a new bot and returns the secret id.",
    }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.BotRegistrationDto]),
    __metadata("design:returntype", Promise)
], BotsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Bot was succesfully returned",
        type: models_1.BotRegistrationPublicDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: "Bot not found",
    }),
    (0, common_1.Post)("/recover"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.BotRecoveryDto]),
    __metadata("design:returntype", Promise)
], BotsController.prototype, "recover", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Returns the board the bot joined",
        type: models_1.BoardDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: "Invalid bot id",
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: "Board full, bot already playing or no boards available",
    }),
    (0, swagger_1.ApiOperation)({
        summary: "Join a board",
        description: "Try to join a board to start a new play session",
    }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(":id/join"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.JoinInputDto]),
    __metadata("design:returntype", void 0)
], BotsController.prototype, "join", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Returns the state of board after the move",
        type: models_1.BoardDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: "Invalid botId",
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: "Move not legal",
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: "Bot not active in a game",
    }),
    (0, swagger_1.ApiOperation)({
        summary: "Move bot",
        description: "Perform a move for the bot on the bot's current board",
    }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(":id/move"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.MoveInputDto]),
    __metadata("design:returntype", Promise)
], BotsController.prototype, "move", null);
BotsController = __decorate([
    (0, swagger_1.ApiTags)("Bots"),
    (0, common_1.Controller)("api/bots"),
    __metadata("design:paramtypes", [services_1.BotsService,
        services_1.BoardsService])
], BotsController);
exports.BotsController = BotsController;
//# sourceMappingURL=bots.controller.js.map