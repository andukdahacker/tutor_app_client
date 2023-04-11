import { LoginInput } from "@/generated/graphql";
import { ACCESS_TOKEN_KEY } from "@/modules/auth.constants";
import { Store } from "@/shared/store";
import { proxy } from "valtio";
import { AuthService, authService } from "../data/auth.service";
import { authStore } from "./auth.store";

class LoginStore extends Store {
  isLoading: boolean = false;
  error: boolean = false;

  constructor(private readonly authService: AuthService) {
    super();
  }

  async logIn(loginInput: LoginInput) {
    this.isLoading = true;

    const result = await this.authService.logIn(loginInput);

    this.isLoading = false;

    if (result.error) {
      this.error = true;
      this.handleError(result.error);
    } else if (result.data) {
      localStorage.setItem(ACCESS_TOKEN_KEY, result.data.login.access_token);
      authStore.isAuthenticated = true;
      authStore.user = result.data.login.user;
    }
  }
}

export const loginStore = proxy(new LoginStore(authService));
