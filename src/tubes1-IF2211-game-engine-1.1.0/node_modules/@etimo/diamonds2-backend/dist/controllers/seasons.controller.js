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
exports.SeasonsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const models_1 = require("../models");
const services_1 = require("../services");
let SeasonsController = class SeasonsController {
    seasonsService;
    boardConfigService;
    constructor(seasonsService, boardConfigService) {
        this.seasonsService = seasonsService;
        this.boardConfigService = boardConfigService;
    }
    async listAll() {
        const seasons = await this.seasonsService.all();
        return seasons.map((season) => models_1.SeasonDto.fromEntity(season));
    }
    async getCurrentSeason() {
        const season = await this.seasonsService.getCurrentSeason();
        return models_1.SeasonDto.fromEntity(season);
    }
    async getSeasonById(id) {
        const season = await this.seasonsService.getSeason(id);
        return models_1.SeasonDto.fromEntity(season);
    }
    async getSeasonRules(id) {
        const season = await this.seasonsService.getSeason(id);
        return models_1.BoardConfigDto.fromSeasonWithBoardConfig(season);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Returns seasons",
        isArray: true,
        type: models_1.SeasonDto,
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeasonsController.prototype, "listAll", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Returns current season",
        type: models_1.SeasonDto,
    }),
    (0, common_1.Get)("/current"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeasonsController.prototype, "getCurrentSeason", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Returns season by id",
        type: models_1.SeasonDto,
    }),
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SeasonsController.prototype, "getSeasonById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Returns rules for season",
        type: models_1.BoardConfigDto,
    }),
    (0, common_1.Get)("/:id/rules"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SeasonsController.prototype, "getSeasonRules", null);
SeasonsController = __decorate([
    (0, swagger_1.ApiTags)("Seasons"),
    (0, common_1.Controller)("api/seasons"),
    __metadata("design:paramtypes", [services_1.SeasonsService,
        services_1.BoardConfigService])
], SeasonsController);
exports.SeasonsController = SeasonsController;
//# sourceMappingURL=seasons.controller.js.map