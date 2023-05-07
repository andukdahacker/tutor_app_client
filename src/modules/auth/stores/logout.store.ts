import AppRoutes from "@/shared/app_routes";
import StoreUtils from "@/shared/utils/store.utils";
import Router from "next/router";
import { proxy } from "valtio";
import { ACCESS_TOKEN_KEY } from "../auth.constants";
import authService from "../data/auth.service";
import authStore from "./auth.store";

class LogOutStore {
  isLoading: boolean = false;
  error: boolean = false;

  async logOut() {
    this.isLoading = true;
    const result = await authService.logOut();
    this.isLoading = false;
    if (result.data) {
      StoreUtils.successToast("Logged out successfully");
      authStore.isAuthenticated = false;
      authStore.user = null;
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      Router.push(AppRoutes.HOME_ROUTE);
    } else if (result.errors) {
      StoreUtils.handleError(result.errors);
    }
  }
}

const logOutStore = proxy(new LogOutStore());

export default logOutStore;
