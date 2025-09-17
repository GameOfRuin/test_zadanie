"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapPipes = void 0;
const common_1 = require("@nestjs/common");
const bootstrapPipes = (app) => {
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
    }));
};
exports.bootstrapPipes = bootstrapPipes;
//# sourceMappingURL=pipes.bootstrap.js.map