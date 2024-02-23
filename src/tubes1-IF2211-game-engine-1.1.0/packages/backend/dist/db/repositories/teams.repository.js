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
exports.TeamsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../services/prisma.service");
let TeamsRepository = class TeamsRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async all() {
        return this.prisma.team.findMany({
            orderBy: {
                createTimeStamp: "desc",
            },
        });
    }
    async getByAbbreviation(abbreviation) {
        const team = await this.prisma.team.findFirst({
            where: {
                abbreviation,
            },
        });
        return team;
    }
    async create(data) {
        return await this.prisma.team.create({
            data,
        });
    }
    async get(field, data) {
        return this.prisma.team.findFirst({
            where: {
                [field]: data,
            },
        });
    }
};
TeamsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TeamsRepository);
exports.TeamsRepository = TeamsRepository;
//# sourceMappingURL=teams.repository.js.map