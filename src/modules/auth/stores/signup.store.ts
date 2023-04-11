import { SignUpInput } from "@/generated/graphql";
import { toast } from "@/pages/_app";
import { Store } from "@/shared/store";
import { proxy } from "valtio";
import { AuthService, authService } from "../data/auth.service";

class SignUpStore extends Store {
  isLoading: boolean = false;
  error: boolean = false;

  constructor(private readonly authService: AuthService) {
    super();
  }

  async signUp(signUpInput: SignUpInput) {
    this.isLoading = true;

    const result = await this.authService.signUp(signUpInput);

    this.isLoading = false;

    if (result.data) {
      toast({
        title: "Signed up successfully",
      });
    } else if (result.error) {
      this.handleError(result.error);
    }
  }
}

export const signUpStore = proxy(new SignUpStore(authService));
