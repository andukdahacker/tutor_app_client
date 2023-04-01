import {
  LoginDocument,
  LoginInput,
  LogoutDocument,
  RefreshAccessTokenDocument,
  SignUpDocument,
  SignUpInput,
} from "@/generated/graphql";
import { client } from "@/shared/client";

export class AuthService {
  async logIn(loginInput: LoginInput) {
    return await client
      .mutation(LoginDocument, {
        loginInput: {
          email: loginInput.email,
          password: loginInput.password,
        },
      })
      .toPromise();
  }

  async signUp(signUpInput: SignUpInput) {
    return await client
      .mutation(SignUpDocument, {
        signUpInput: {
          username: signUpInput.username,
          email: signUpInput.email,
          password: signUpInput.password,
        },
      })
      .toPromise();
  }

  async logOut() {
    return await client.mutation(LogoutDocument, {}).toPromise();
  }

  async refreshAccessToken() {
    return await client.mutation(RefreshAccessTokenDocument, {}).toPromise();
  }
}

export const authService = new AuthService();
