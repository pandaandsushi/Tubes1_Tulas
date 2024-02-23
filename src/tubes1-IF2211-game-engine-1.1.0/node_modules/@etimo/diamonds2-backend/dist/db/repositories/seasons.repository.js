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
exports.SeasonsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../services/prisma.service");
let SeasonsRepository = class SeasonsRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.season.create({
            data: {
                endDate: data.endDate,
                name: data.name,
                startDate: data.startDate,
                boardConfigId: data.boardConfigId,
            },
        });
    }
    async getById(seasonId, includeBoardConfig) {
        const season = await this.prisma.season.findFirst({
            where: {
                id: seasonId,
            },
            include: {
                boardConfig: includeBoardConfig,
            },
        });
        return season;
    }
    async getCurrentSeason() {
        const currentSeason = await this.prisma.season.findFirst({
            where: {
                startDate: {
                    lte: new Date(),
                },
                endDate: {
                    gte: new Date(),
                },
            },
            include: {
                boardConfig: true,
            },
        });
        return currentSeason;
    }
    async getAll() {
        return this.prisma.season.findMany({
            orderBy: {
                createTimeStamp: "desc",
            },
        });
    }
    async getByName(name) {
        return this.prisma.season.findFirst({
            where: {
                name,
            },
        });
    }
    // Check if the new dates collides with other season dates.
    async dateCollision(startDate, endDate) {
        return this.prisma.season.findFirst({
            where: {
                startDate: {
                    lte: endDate,
                },
                endDate: {
                    lte: startDate,
                },
            },
        });
    }
};
SeasonsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SeasonsRepository);
exports.SeasonsRepository = SeasonsRepository;
//# sourceMappingURL=seasons.repository.js.map