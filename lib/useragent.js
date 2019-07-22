"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useragent = require('express-useragent-x');
class UserAgent {
    constructor(source = 'unknown') {
        this.agent = useragent.parse(source);
        return this.agent;
    }
}
exports.default = UserAgent;
module.exports = UserAgent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmFnZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcmFnZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFakQsTUFBcUIsU0FBUztJQUc1QixZQUFZLE1BQU0sR0FBRyxTQUFTO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztDQUNGO0FBUkQsNEJBUUM7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyJ9