import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { ValidationException } from "./exceptions";
export declare class ValidationExceptionFilter implements ExceptionFilter {
    catch(exception: ValidationException, host: ArgumentsHost): void;
}
//# sourceMappingURL=validation-exception.filter.d.ts.map