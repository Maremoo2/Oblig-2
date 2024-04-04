"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
// dataFetcher.ts
const axios_1 = __importDefault(require("axios"));
function fetchData(statisticVariable, regionType, regions, years) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = "https://www.ssb.no/statbank/table/11342";
            // Konstruer spørringen basert på brukerens input
            const query = {
                query: [
                    {
                        code: "Variabler",
                        selection: {
                            filter: "item",
                            values: [statisticVariable]
                        }
                    },
                    {
                        code: regionType,
                        selection: {
                            filter: "item",
                            values: regions
                        }
                    },
                    {
                        code: "Tid",
                        selection: {
                            filter: "item",
                            values: years.map(year => `${year}`)
                        }
                    }
                ],
                response: {
                    format: "json-stat2"
                }
            };
            // Hent data fra ekstern kilde
            const response = yield axios_1.default.post(url, query);
            return response.data;
        }
        catch (error) {
            console.error('Error fetching data:', error);
            throw new Error('Failed to fetch data');
        }
    });
}
exports.fetchData = fetchData;
