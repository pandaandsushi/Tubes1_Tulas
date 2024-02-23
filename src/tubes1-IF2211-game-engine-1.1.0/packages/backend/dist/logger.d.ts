import { LoggerService } from "@nestjs/common";
export declare class CustomLogger implements LoggerService {
    log(message: string): void;
    error(message: string, trace: string): void;
    trace(message: string): void;
    warn(message: string): void;
    debug(message: string): void;
    info(message: string): void;
    verbose(message: string): void;
}
//# sourceMappingURL=logger.d.ts.map