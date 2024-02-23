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
exports.RecordingsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../services/prisma.service");
let RecordingsRepository = class RecordingsRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async allBySeasonIdRaw(seasonId, limit = 0) {
        return this.prisma.recording.findMany({
            where: {
                seasonId,
            },
            take: limit,
        });
    }
    async create(data) {
        return this.prisma.recording.create({
            data,
        });
    }
    async getById(id) {
        return this.prisma.recording.findMany({
            where: {
                id,
            },
        });
    }
    async getScores(seasonId, maxEntries) {
        const recordings = await this.prisma.recording.findMany({
            select: {
                score: true,
            },
            where: {
                seasonId,
            },
            orderBy: {
                score: "desc",
            },
            take: maxEntries,
        });
        return recordings.map((e) => e.score);
    }
    async deleteRecordingsWithLowScore(seasonId, higestScore) {
        await this.prisma.recording.deleteMany({
            where: {
                seasonId,
                score: {
                    lt: higestScore,
                },
            },
        });
    }
    async getLastScore(botId) {
        return (await this.prisma.recording.findFirst({
            where: { botId: botId },
            orderBy: [{ createTimeStamp: "desc" }],
        }))?.score;
    }
    async reset() {
        await this.prisma.recording.deleteMany();
    }
};
RecordingsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RecordingsRepository);
exports.RecordingsRepository = RecordingsRepository;
//# sourceMappingURL=recordings.repository.js.map