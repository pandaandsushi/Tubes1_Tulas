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
exports.BoardConfigRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../services/prisma.service");
let BoardConfigRepository = class BoardConfigRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getBoardConfigById(id) {
        return this.prisma.boardConfig.findFirst({
            where: {
                id: id,
            },
        });
    }
    async create(newBoardConfig) {
        return this.prisma.boardConfig.create({
            data: {
                canTackle: newBoardConfig.canTackle,
                height: newBoardConfig.height,
                inventorySize: newBoardConfig.inventorySize,
                minimumDelayBetweenMoves: newBoardConfig.minimumDelayBetweenMoves,
                teleporters: newBoardConfig.teleporters,
                teleportRelocation: newBoardConfig.teleportRelocation,
                width: newBoardConfig.width,
                sessionLength: newBoardConfig.sessionLength,
                separateBoards: newBoardConfig.separateBoards,
            },
        });
    }
};
BoardConfigRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BoardConfigRepository);
exports.BoardConfigRepository = BoardConfigRepository;
//# sourceMappingURL=boardConfig.repository.js.map