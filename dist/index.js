"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_graphql_1 = require("express-graphql");
const schema_1 = __importDefault(require("./graphql/schema"));
const resolver_1 = __importDefault(require("./graphql/resolver"));
require("dotenv").config();
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.default,
    rootValue: resolver_1.default,
    graphiql: true,
}));
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(() => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
})
    .catch((err) => {
    console.log(err);
});
