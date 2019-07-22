const useragent = require('express-useragent-x');

export default class UserAgent {
  private readonly agent: any

  constructor(source = 'unknown') {
    this.agent = useragent.parse(source);

    return this.agent;
  }
}

module.exports = UserAgent;
