import { IBot } from "../types";
export declare class BotRegistrationPublicDto {
    id: string;
    name: string;
    email: string;
    static fromEntity(entity: IBot): {
        name: string;
        email: string;
        id: string;
    };
}
//# sourceMappingURL=bot-registration-public.dto.d.ts.map