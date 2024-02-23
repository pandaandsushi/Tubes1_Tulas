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
exports.TeamsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const models_1 = require("../models");
const services_1 = require("../services");
let TeamsController = class TeamsController {
    teamsService;
    constructor(teamsService) {
        this.teamsService = teamsService;
    }
    async listAll() {
        const teams = await this.teamsService.all();
        return teams.map((team) => models_1.TeamDto.fromEntity(team));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Returns a list of all teams",
        isArray: true,
        type: models_1.TeamDto,
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "listAll", null);
TeamsController = __decorate([
    (0, swagger_1.ApiTags)("Teams"),
    (0, common_1.Controller)("api/teams"),
    __metadata("design:paramtypes", [services_1.TeamsService])
], TeamsController);
exports.TeamsController = TeamsController;
//# sourceMappingURL=teams.controller.js.map