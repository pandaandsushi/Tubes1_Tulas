import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
export interface Response<T> {
    data: T;
}
export declare class EnvelopeInterceptor<T> implements NestInterceptor<T, Response<T>> {
    constructor();
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>>;
}
//# sourceMappingURL=envelope.interceptor.d.ts.map