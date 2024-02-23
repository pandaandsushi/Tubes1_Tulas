import { NestInterceptor, ExecutionContext, CallHandler, Logger } from "@nestjs/common";
import { Observable } from "rxjs";
export declare class TimingInterceptor implements NestInterceptor {
    private logger;
    constructor(logger: Logger);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
//# sourceMappingURL=timing.interceptor.d.ts.map