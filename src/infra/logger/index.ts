class Logger {

  private client;

  constructor() {
    this.client = console;
  }

  error(errorObj, message = '') {
    this.client.error(errorObj, message);
  }

  debug(message) {
    this.client.debug(message);
  }

  info(message) {
    this.client.info(message);
  }

  log(message) {
    this.info(message);
  }

  warn(message, err) {
    this.client.warn(message);
    this.client.warn(err);
  }

}

export default new Logger();
