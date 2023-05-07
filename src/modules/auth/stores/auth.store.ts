import { User } from "@/generated/graphql";
import AppRoutes from "@/shared/app_routes";
import Router from "next/router";
import { proxy } from "valtio";
import { ACCESS_TOKEN_KEY } from "../auth.constants";
import authService from "../data/auth.service";

class AuthStore {
  isAuthenticated = false;
  user: User | null = null;
  isLoading = true;

  hideLoading() {
    this.isLoading = false;
  }

  showLoading() {
    this.isLoading = true;
  }

  async refreshAccessToken() {
    this.isLoading = true;
    const result = await authService.refreshAccessToken();
    this.isLoading = false;
    if (result.data) {
      localStorage.setItem(
        ACCESS_TOKEN_KEY,
        result.data.refreshAccessToken.access_token
      );
      this.isAuthenticated = true;
    } else if (result.errors) {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      this.isAuthenticated = false;
      Router.push(AppRoutes.HOME_ROUTE);
    }
  }

  async checkIfAuthenticated() {
    this.isLoading = true;
    const result = await authService.me();
    this.isLoading = false;
    if (result.data?.me.user) {
      this.isAuthenticated = true;
      this.user = result.data.me.user;
    } else if (result.errors) {
      this.isAuthenticated = false;
    }
  }
}

const authStore = proxy(new AuthStore());

export default authStore;
