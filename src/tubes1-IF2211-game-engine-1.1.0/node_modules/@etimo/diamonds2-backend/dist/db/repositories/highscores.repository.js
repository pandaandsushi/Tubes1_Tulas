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
exports.HighscoresRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../services/prisma.service");
let HighscoresRepository = class HighscoresRepository {
    prisma;
    entity = "high_scores";
    constructor(prisma) {
        this.prisma = prisma;
    }
    async allBySeasonIdRaw(seasonId, currentSeasonId, limit = 0) {
        const take = limit ? limit : seasonId === currentSeasonId ? 50 : 20;
        return (await this.prisma.highscore.findMany({
            where: {
                seasonId,
            },
            include: {
                bot: {
                    include: {
                        team: {
                            select: {
                                name: true,
                                logotypeUrl: true,
                            },
                        },
                    },
                },
            },
            take: take,
            orderBy: {
                score: "desc",
            },
        }));
    }
    getBotScore(botName) {
        return this.prisma.highscore.findMany({
            where: {
                bot: {
                    name: botName,
                },
            },
        });
    }
    async getBestBotScore(botId, seasonId) {
        return this.prisma.highscore.findFirst({
            where: {
                bot: {
                    id: botId,
                },
                seasonId,
            },
        });
    }
    async updateBestBotScore(botId, seasonId, score) {
        await this.prisma.highscore.update({
            data: {
                score,
            },
            where: {
                seasonId_botId: {
                    botId,
                    seasonId,
                },
            },
        });
    }
    async create(data) {
        return this.prisma.highscore.create({
            data: {
                botId: data.botId,
                score: data.score,
                seasonId: data.seasonId,
            },
        });
    }
    async delete(botId) {
        return this.prisma.highscore.deleteMany({
            where: {
                botId,
            },
        });
    }
};
HighscoresRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HighscoresRepository);
exports.HighscoresRepository = HighscoresRepository;
//# sourceMappingURL=highscores.repository.js.map