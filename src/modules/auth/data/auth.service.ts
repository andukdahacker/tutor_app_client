import {
  LoginDocument,
  LoginInput,
  LogoutDocument,
  MeDocument,
  RefreshAccessTokenDocument,
  SignUpDocument,
  SignUpInput,
} from "@/generated/graphql";
import { urql } from "@/shared/client";

class AuthService {
  async logIn(loginInput: LoginInput) {
    return await urql.mutation(LoginDocument, {
      loginInput: {
        email: loginInput.email,
        password: loginInput.password,
      },
    });
  }

  async signUp(signUpInput: SignUpInput) {
    return await urql.mutation(SignUpDocument, {
      signUpInput: {
        username: signUpInput.username,
        email: signUpInput.email,
        password: signUpInput.password,
      },
    });
  }

  async logOut() {
    return await urql.mutation(LogoutDocument, {});
  }

  async refreshAccessToken() {
    return await urql.mutation(RefreshAccessTokenDocument, {});
  }

  async me() {
    return await urql.query(MeDocument, {});
  }
}

const authService = new AuthService();

export default authService;
