export abstract class AppService {
  constructor() {
    console.log("created client");
  }

  protected async query() {}

  protected async mutation() {}

  protected async subscribe() {}

  protected async handleResponse() {}

  protected async handleError() {}
}
