"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.Columns = exports.Tables = void 0;
var Tables;
(function (Tables) {
    Tables["transactions"] = "transactions";
    Tables["users"] = "users";
})(Tables || (exports.Tables = Tables = {}));
var Columns;
(function (Columns) {
    Columns["id"] = "id";
    Columns["balance"] = "balance";
    Columns["amount"] = "amount";
    Columns["action"] = "action";
    Columns["userId"] = "userId";
    Columns["createdAt"] = "createdAt";
    Columns["updatedAt"] = "updatedAt";
})(Columns || (exports.Columns = Columns = {}));
var Action;
(function (Action) {
    Action["deposit"] = "deposit";
    Action["withdrawal"] = "withdrawal";
    Action["purchase"] = "purchase";
})(Action || (exports.Action = Action = {}));
//# sourceMappingURL=dictionary.js.map