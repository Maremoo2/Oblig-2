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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const axios_1 = __importDefault(require("axios"));
// Definer URL for API-endepunktet
const API_ENDPOINT = '/api/data';
// Deklarer variabler
let statisticVariable;
let regionType;
let regions;
let years;
// Definer en funksjon for å håndtere skjemainnsending
const handleFormSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Form submitted, handling data...');
    // Flytter variabelhentingen inn i funksjonen
    statisticVariable = document.getElementById("statisticVariable").value;
    regionType = document.getElementById("regionType").value;
    regions = document.getElementById("regions").value.split(",");
    years = [
        document.getElementById("year1").value,
        document.getElementById("year2").value,
        document.getElementById("year3").value
    ];
    console.log('Sending data to server:', { statisticVariable, regionType, regions, years });
    event.preventDefault(); // Hindre standard skjemainnsending
    try {
        // Send brukerens input til serveren
        const response = yield axios_1.default.post(API_ENDPOINT, { statisticVariable, regionType, regions, years });
        // Håndter mottatte data
        const statistics = response.data;
        updateUIWithStatistics(statistics);
    }
    catch (error) {
        console.error('Error fetching data:', error);
        displayError('Failed to fetch data. Please try again later.');
    }
});
// Oppdater brukergrensesnittet med statistikkene
const updateUIWithStatistics = (statistics) => {
    // Oppdater HTML for å vise statistikkene
    console.log('Statistics:', statistics);
};
// Vis feilmelding til brukeren
const displayError = (message) => {
    // Vis en feilmelding til brukeren på en hensiktsmessig måte
    console.error(message);
};
// Legg til hendelseslytter for skjemainnsending
(_a = document.getElementById("statisticsForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", handleFormSubmit);
