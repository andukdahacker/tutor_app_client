import { User } from "@/generated/graphql";
import { ACCESS_TOKEN_KEY } from "@/modules/auth.constants";
import { AppRoutes } from "@/shared/app_routes";

import { Store } from "@/shared/store";
import Router from "next/router";
import { proxy } from "valtio";
import { authService, AuthService } from "../data/auth.service";
import { logOutStore } from "./logout.store";

class AuthStore extends Store {
  isAuthenticated = false;
  user: User | null = null;
  isLoading = true;

  constructor(private authService: AuthService) {
    super();
  }

  hideLoading() {
    this.isLoading = false;
  }

  showLoading() {
    this.isLoading = true;
  }

  async refreshAccessToken() {
    this.isLoading = true;
    const result = await this.authService.refreshAccessToken();
    this.isLoading = false;
    if (result.data) {
      localStorage.setItem(
        ACCESS_TOKEN_KEY,
        result.data.refreshAccessToken.access_token
      );
      this.isAuthenticated = true;
    } else if (result.error) {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      this.isAuthenticated = false;
      await logOutStore.logOut();
      Router.push(AppRoutes.HOME_ROUTE);
    }
  }

  async checkIfAuthenticated() {
    this.isLoading = true;
    const result = await this.authService.me();
    this.isLoading = false;
    if (result.data?.me.user) {
      this.isAuthenticated = true;
      this.user = result.data.me.user;
    } else if (result.error) {
      this.isAuthenticated = false;
      this.handleError(result.error);
    }
  }
}

export const authStore = proxy(new AuthStore(authService));
