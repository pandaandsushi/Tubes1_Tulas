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
exports.BotRegistrationsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../services/prisma.service");
let BotRegistrationsRepository = class BotRegistrationsRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        return this.prisma.bot.create({
            data: {
                email: dto.email,
                name: dto.name,
                password: dto.password,
                teamId: dto.teamId ?? undefined,
            },
        });
    }
    async delete(bot) {
        return (await this.prisma.bot.delete({
            where: {
                id: bot.id,
            },
        }));
    }
    async getByEmail(email) {
        email = email.toLowerCase();
        return (await this.prisma.bot.findFirst({
            where: {
                email,
            },
        }));
    }
    async getByName(name) {
        name = name.toLowerCase();
        return (await this.prisma.bot.findFirst({
            where: {
                name,
            },
        }));
    }
    async get(id) {
        return (await this.prisma.bot.findFirst({
            where: {
                id,
            },
        }));
    }
};
BotRegistrationsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BotRegistrationsRepository);
exports.BotRegistrationsRepository = BotRegistrationsRepository;
//# sourceMappingURL=botRegistrations.repository.js.map