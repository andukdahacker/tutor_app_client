import { LoginInput, SignUpInput, User } from "@/generated/graphql";
import AppRoutes from "@/shared/app_routes";
import { appRepository } from "@/shared/data/app.repository";
import StoreUtils from "@/shared/utils/store.utils";
import Router from "next/router";
import { proxy } from "valtio";
import { ACCESS_TOKEN_KEY } from "./auth.constants";

class AuthStore {
  isAuthenticated = false;
  user: User | null = null;
  isLoading = false;

  hideLoading() {
    this.isLoading = false;
  }

  showLoading() {
    this.isLoading = true;
  }

  async refreshAccessToken() {
    this.showLoading();
    const result = await appRepository.refreshAccessToken();
    this.hideLoading();
    if (result.data) {
      localStorage.setItem(
        ACCESS_TOKEN_KEY,
        result.data.refreshAccessToken.access_token
      );
      this.isAuthenticated = true;
    } else if (result.errors) {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      this.isAuthenticated = false;
      Router.push(AppRoutes.HOME);
    }
  }

  async checkIfAuthenticated() {
    this.showLoading();
    const result = await appRepository.me();
    this.hideLoading();
    if (result.data?.me.user) {
      this.isAuthenticated = true;
      this.user = result.data.me.user;
    } else if (result.errors) {
      this.isAuthenticated = false;
    }
  }

  async logIn(loginInput: LoginInput) {
    const result = await appRepository.logIn(loginInput);

    if (result.errors) {
      StoreUtils.handleError(result.errors);
    } else if (result.data) {
      StoreUtils.successToast("Logged in successfully");
      localStorage.setItem(ACCESS_TOKEN_KEY, result.data.login.access_token);
      authStore.isAuthenticated = true;
      authStore.user = result.data.login.user;
    }
  }

  async logOut() {
    const result = await appRepository.logOut();

    if (result.data) {
      StoreUtils.successToast("Logged out successfully");
      authStore.isAuthenticated = false;
      authStore.user = null;
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      Router.push(AppRoutes.HOME);
    } else if (result.errors) {
      StoreUtils.handleError(result.errors);
    }
  }

  async signUp(signUpInput: SignUpInput) {
    const result = await appRepository.signUp(signUpInput);

    if (result.data) {
      StoreUtils.successToast("Signed up successfully");
    } else if (result.errors) {
      StoreUtils.handleError(result.errors);
    }
  }
}

const authStore = proxy(new AuthStore());

export default authStore;
