import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
export declare class AllExceptionsFilter implements ExceptionFilter {
    private readonly exceptionMap;
    catch(exception: Error, host: ArgumentsHost): void;
    mapException(exception: Error): HttpException;
}
//# sourceMappingURL=exception-filter.d.ts.map