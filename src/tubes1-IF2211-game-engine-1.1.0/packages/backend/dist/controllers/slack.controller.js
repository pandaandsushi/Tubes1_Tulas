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
exports.SlackController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
let SlackController = class SlackController {
    slackService;
    authorizationService;
    constructor(slackService, authorizationService) {
        this.slackService = slackService;
        this.authorizationService = authorizationService;
    }
    /**
     * Return all seasons in a slack modal.
     */
    async listAllSeasons(input) {
        return this.slackService.getAllSeasons(input);
    }
    /**
     * Return a slack modal to add seasons
     */
    async addSeasonModal(input) {
        return await this.slackService.getSeasonModal(input);
    }
    /**
     * Return all teams in a slack modal.
     */
    async listAllTeams(input) {
        return this.slackService.getAllTeams(input);
    }
    /**
     * Return a slack modal to add team
     */
    async addTeamModal(input) {
        return await this.slackService.getTeamModal(input);
    }
    /**
     * Someone has interacted with a modal on slack - Returns noting if OK, slack error if an error occured
     */
    async interact(request, input) {
        await this.authorizationService.isSlackRequest(request);
        return await this.slackService.handleInteract(input);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Shows a slack modal with all seasons",
    }),
    (0, common_1.Post)("/seasons"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SlackController.prototype, "listAllSeasons", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Shows a slack modal to add seasons",
    }),
    (0, common_1.Post)("/season"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SlackController.prototype, "addSeasonModal", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Shows a slack modal with all teams",
    }),
    (0, common_1.Post)("/teams"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SlackController.prototype, "listAllTeams", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Shows a slack modal to add seasons",
    }),
    (0, common_1.Post)("/team"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SlackController.prototype, "addTeamModal", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "No body if OK",
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: "Only slack is allowed to call this endpoint.",
    }),
    (0, common_1.Post)("/interact"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SlackController.prototype, "interact", null);
SlackController = __decorate([
    (0, swagger_1.ApiTags)("Slack"),
    (0, common_1.Controller)("api/slack"),
    __metadata("design:paramtypes", [services_1.SlackService,
        services_1.AuthorizationService])
], SlackController);
exports.SlackController = SlackController;
//# sourceMappingURL=slack.controller.js.map