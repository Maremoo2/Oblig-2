"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateStatistics = void 0;
// statisticsCalculator.ts
function calculateStatistics(data) {
    try {
        // Utfør beregninger på dataene og returner statistikk
        const sortedData = data.slice().sort((a, b) => a - b);
        const n = sortedData.length;
        const median = n % 2 === 0 ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2 : sortedData[Math.floor(n / 2)];
        const mean = sortedData.reduce((acc, val) => acc + val, 0) / n;
        const max = sortedData[n - 1];
        const min = sortedData[0];
        return { median, mean, max, min };
    }
    catch (error) {
        console.error('Error calculating statistics:', error);
        throw new Error('Failed to calculate statistics');
    }
}
exports.calculateStatistics = calculateStatistics;
