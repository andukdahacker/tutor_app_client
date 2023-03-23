import { Client, createClient } from "urql";

export class AppRepository {
  private client: Client;

  constructor() {
    this.client = createClient({
      url: "",
    });
  }

  protected async query() {}

  protected async mutation() {}

  protected async subscribe() {}

  protected async handleResponse() {}

  protected async handleError() {}
}
