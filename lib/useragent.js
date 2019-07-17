const useragent = require('express-useragent');

class UserAgent {
  constructor(source = 'unknown') {
    this.agent = useragent.parse(source);

    return this.agent;
  }
}

module.exports = UserAgent;
