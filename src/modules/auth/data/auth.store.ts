import { LoginInput, SignUpInput, User } from "@/generated/graphql";
import { ACCESS_TOKEN_KEY } from "@/modules/auth.constants";
import { toast } from "@/pages/_app";
import { AppRoutes } from "@/shared/app_routes";

import { IError } from "@/shared/types/IError";
import { CombinedError } from "@urql/core";
import Router from "next/router";
import { proxy } from "valtio";
import { authService, AuthService } from "./auth.service";

interface LoginState {
  isLoading: boolean;
  error: boolean;
}

interface SignUpState {
  isLoading: boolean;
  error: boolean;
}

interface LogOutState {
  isLoading: boolean;
}

class AuthStore {
  isAuthenticated = false;
  user: User | null = null;

  loginState: LoginState = {
    isLoading: false,
    error: false,
  };

  signUpState: SignUpState = {
    isLoading: false,
    error: false,
  };

  logOutState: LogOutState = {
    isLoading: false,
  };

  constructor(private authService: AuthService) {}

  async signUp(signUpInput: SignUpInput) {
    this.signUpState.isLoading = true;

    const result = await this.authService.signUp(signUpInput);

    this.signUpState.isLoading = false;

    if (result.data) {
      toast({
        title: "Signed up successfully",
      });
    } else if (result.error) {
      this.handleError(result.error);
    }
  }

  async logIn(loginInput: LoginInput) {
    this.loginState.isLoading = true;

    const result = await this.authService.logIn(loginInput);

    this.loginState.isLoading = false;

    if (result.error) {
      this.loginState.error = true;
      this.handleError(result.error);
    } else if (result.data) {
      localStorage.setItem(ACCESS_TOKEN_KEY, result.data.login.access_token);
      this.isAuthenticated = true;
      this.user = result.data.login.user;
    }
  }

  async logOut() {
    this.logOutState.isLoading = true;
    const result = await this.authService.logOut();
    this.logOutState.isLoading = false;
    if (result.data) {
      this.isAuthenticated = false;
      this.user = null;
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      Router.push(AppRoutes.HOME_ROUTE);
    } else if (result.error) {
      this.handleError(result.error);
    }
  }

  async refreshAccessToken() {
    const result = await this.authService.refreshAccessToken();

    if (result.data) {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.setItem(
        ACCESS_TOKEN_KEY,
        result.data.refreshAccessToken.access_token
      );
      this.isAuthenticated = true;
    } else if (result.error) {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      this.isAuthenticated = false;
      Router.push(AppRoutes.HOME_ROUTE);
    }
  }

  async checkIfAuthenticated() {
    const result = await this.authService.me();

    if (result.data?.me.user) {
      this.isAuthenticated = true;
      this.user = result.data.me.user;
    } else if (result.error) {
      this.isAuthenticated = false;
      this.handleError(result.error);
    }
  }

  handleError(error: CombinedError) {
    if (error.graphQLErrors) {
      error.graphQLErrors.forEach((e) => {
        if (e.extensions.originalError) {
          const error = e.extensions.originalError as IError;
          if (typeof error.message === "string") {
            toast({
              title: error.message,
            });
          } else {
            error.message.forEach((err) => toast({ title: err }));
          }
        } else {
          toast({
            title: e.message,
          });
        }
      });
    }

    if (error.networkError) {
      console.log(error.networkError.message);
    }
  }
}

export const authStore = proxy(new AuthStore(authService));
