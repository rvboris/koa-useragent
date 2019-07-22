"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const useragent_1 = tslib_1.__importDefault(require("./lib/useragent"));
exports.default = async (ctx, next) => {
    const { header } = ctx.request;
    const source = header['user-agent'];
    ctx.userAgent = new useragent_1.default(source);
    await next();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3RUFBdUM7QUFFdkMsa0JBQWUsS0FBSyxFQUFFLEdBQVEsRUFBRSxJQUF3QixFQUFFLEVBQUU7SUFDeEQsTUFBTSxFQUFDLE1BQU0sRUFBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUE7SUFDNUIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBRW5DLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRXJDLE1BQU0sSUFBSSxFQUFFLENBQUE7QUFDaEIsQ0FBQyxDQUFBIn0=