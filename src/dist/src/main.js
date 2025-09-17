"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const bootstrap_1 = require("../bootstrap");
const config_1 = require("../config");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    (0, bootstrap_1.bootstrapSwagger)(app);
    (0, bootstrap_1.bootstrapPipes)(app);
    await app.listen(config_1.appConfig.port);
}
bootstrap();
//# sourceMappingURL=main.js.map