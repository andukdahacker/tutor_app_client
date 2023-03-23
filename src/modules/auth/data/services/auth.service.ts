import { AppRepository } from "@/shared/app_repository";
import { singleton } from "tsyringe";

@singleton()
export class AuthService extends AppRepository {
  async login() {
    await this.mutation();
  }
}
