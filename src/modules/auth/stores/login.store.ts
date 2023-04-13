import { LoginInput } from "@/generated/graphql";
import { ACCESS_TOKEN_KEY } from "@/modules/auth.constants";
import StoreUtils from "@/shared/utils/store.utils";
import { proxy } from "valtio";
import authService from "../data/auth.service";
import authStore from "./auth.store";

class LoginStore {
  isLoading: boolean = false;
  error: boolean = false;

  async logIn(loginInput: LoginInput) {
    this.isLoading = true;

    const result = await authService.logIn(loginInput);

    this.isLoading = false;

    if (result.errors) {
      this.error = true;
      StoreUtils.handleError(result.errors);
    } else if (result.data) {
      StoreUtils.successToast("Logged in successfully");
      localStorage.setItem(ACCESS_TOKEN_KEY, result.data.login.access_token);
      authStore.isAuthenticated = true;
      authStore.user = result.data.login.user;
    }
  }
}

const loginStore = proxy(new LoginStore());

export default loginStore;
