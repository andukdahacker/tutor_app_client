import { IAction } from "@/shared/arch/interface/IAction";
import { action, makeObservable } from "mobx";
import { singleton } from "tsyringe";
import { AuthStore } from "../auth";
import { AuthService } from "../data/services/auth.service";

@singleton()
export class LoginAction implements IAction {
  constructor(private authStore: AuthStore, private authService: AuthService) {
    makeObservable(this);
  }

  @action
  async execute() {
    throw new Error("Method not implemented.");
  }
}
