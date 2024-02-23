"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const exception_filter_1 = require("./exception-filter");
const environment_1 = require("./hooks/environment");
const bodyParser = require("body-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(bodyParser.json());
    // app.use(compression());
    app.useGlobalPipes(new common_1.ValidationPipe());
    // app.useGlobalInterceptors(new EnvelopeInterceptor());
    app.useGlobalFilters(new exception_filter_1.AllExceptionsFilter());
    const schema = (0, environment_1.isLocal)() ? "http" : "https";
    const options = new swagger_1.DocumentBuilder()
        .setTitle("Diamonds")
        .setDescription("Diamonds API description")
        .setVersion("2.0")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup("docs", app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map