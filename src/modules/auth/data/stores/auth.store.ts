import { makeObservable } from "mobx";
import { singleton } from "tsyringe";
import { AuthService } from "../services/auth.service";

@singleton()
export class AuthStore {
  constructor(private readonly service: AuthService) {
    makeObservable(this);
  }
}
