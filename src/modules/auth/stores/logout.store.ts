import { ACCESS_TOKEN_KEY } from "@/modules/auth.constants";
import { AppRoutes } from "@/shared/app_routes";
import { Store } from "@/shared/store";
import Router from "next/router";
import { proxy } from "valtio";
import { authService, AuthService } from "../data/auth.service";

import { authStore } from "./auth.store";

class LogOutStore extends Store {
  isLoading: boolean = false;
  error: boolean = false;

  constructor(private readonly authService: AuthService) {
    super();
  }

  async logOut() {
    this.isLoading = true;
    const result = await this.authService.logOut();
    this.isLoading = false;
    if (result.data) {
      authStore.isAuthenticated = false;
      authStore.user = null;
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      Router.push(AppRoutes.HOME_ROUTE);
    } else if (result.error) {
      this.handleError(result.error);
    }
  }
}

export const logOutStore = proxy(new LogOutStore(authService));
