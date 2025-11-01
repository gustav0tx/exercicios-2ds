"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = __importDefault(require("node:http"));
require("dotenv/config");
const nome = 'John';
const idade = 34;
const port = process.env.PORT;
const server = node_http_1.default.createServer((req, res) => {
    res.statusCode = 200;
    res.end(`Servidor rodando para ${nome}, idade ${idade}!`);
});
server.listen(port, () => {
    console.log(`Servidor funcionando em http://localhost:${port}`);
});
server.close(() => {
    console.log("Servidor encerrado.");
});
exports.default = server;
