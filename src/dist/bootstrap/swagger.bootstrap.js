"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const bootstrapSwagger = (app) => {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Prostenkay app')
        .setDescription('Backend API для платежки')
        .setVersion('1.0.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
};
exports.bootstrapSwagger = bootstrapSwagger;
//# sourceMappingURL=swagger.bootstrap.js.map