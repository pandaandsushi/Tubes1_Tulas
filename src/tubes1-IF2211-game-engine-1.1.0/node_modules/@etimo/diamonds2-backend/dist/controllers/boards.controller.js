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
exports.BoardsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const models_1 = require("../models");
const services_1 = require("../services");
let BoardsController = class BoardsController {
    boardsService;
    constructor(boardsService) {
        this.boardsService = boardsService;
    }
    /**
     * Return all boards.
     */
    findAll() {
        return this.boardsService.getAllMetadata();
    }
    /**
     * Return a specific board.
     *
     * @param id The id of the board.
     */
    find(id) {
        return this.boardsService.getById(parseInt(id, 10));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        isArray: true,
        description: "Return all boards",
        type: models_1.BoardMetadataDto,
    }),
    (0, swagger_1.ApiOperation)({
        summary: "List metadata for all boards",
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], BoardsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Returns specific board",
        type: models_1.BoardDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: "Board not found",
    }),
    (0, swagger_1.ApiOperation)({
        summary: "Get info about a board",
        description: "Get metadata and full info about a board and its game state",
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", models_1.BoardDto)
], BoardsController.prototype, "find", null);
BoardsController = __decorate([
    (0, swagger_1.ApiTags)("Boards"),
    (0, common_1.Controller)("api/boards"),
    __metadata("design:paramtypes", [services_1.BoardsService])
], BoardsController);
exports.BoardsController = BoardsController;
//# sourceMappingURL=boards.controller.js.map