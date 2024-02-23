import { ISeasonDto } from "@etimo/diamonds2-types";
import { ISeason } from "../types";
export declare class SeasonDto implements ISeasonDto {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    static from(dto: SeasonDto): SeasonDto;
    static create(dto: SeasonDto): SeasonDto;
    static fromEntity(entity: ISeason): SeasonDto;
}
//# sourceMappingURL=season.dto.d.ts.map