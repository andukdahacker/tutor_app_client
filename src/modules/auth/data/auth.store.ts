import { proxy } from "valtio";
import { AuthService } from "./auth.service";

class AuthStore {
  isAuthenticated = false;
  isLoading = false;
  error = false;

  constructor(private authService: AuthService) {}

  async login() {
    this.isLoading = true;
    const result = await this.authService.login({ email: "", password: "" });
    this.isLoading = false;
    if (result.error) {
      this.error = true;
    } else {
      this.isAuthenticated = true;
    }
  }
}

export const authStore = proxy(new AuthStore(new AuthService()));
