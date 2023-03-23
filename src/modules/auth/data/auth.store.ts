import { makeAutoObservable } from "mobx";
import { AuthService } from "./auth.service";

export class AuthStore {
  constructor(private readonly service: AuthService) {
    makeAutoObservable(this);
  }

  login() {
    this.service.login();
  }
}
