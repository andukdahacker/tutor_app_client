import { LoginDocument, LoginInput } from "@/generated/graphql";
import { client } from "@/shared/client";

export class AuthService {
  async login(loginInput: LoginInput) {
    return await client
      .mutation(LoginDocument, {
        loginInput: {
          email: loginInput.email,
          password: loginInput.password,
        },
      })
      .toPromise();
  }
}
