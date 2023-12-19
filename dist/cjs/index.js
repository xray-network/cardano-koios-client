"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const methods_1 = __importDefault(require("./methods"));
class KoiosTinyClientClass {
    client;
    methods;
    constructor(baseURL) {
        this.client = axios_1.default.create({ baseURL });
        this.client.interceptors.response.use((response) => {
            return {
                ok: response,
            };
        }, (error) => {
            return {
                error,
            };
        });
        this.methods = (0, methods_1.default)(this.client);
    }
}
exports.default = KoiosTinyClientClass;
