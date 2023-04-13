import { SignUpInput } from "@/generated/graphql";
import { toast } from "@/pages/_app";
import StoreUtils from "@/shared/utils/store.utils";
import { proxy } from "valtio";
import authService from "../data/auth.service";

class SignUpStore {
  isLoading: boolean = false;
  error: boolean = false;

  async signUp(signUpInput: SignUpInput) {
    this.isLoading = true;

    const result = await authService.signUp(signUpInput);

    this.isLoading = false;

    if (result.data) {
      toast({
        title: "Signed up successfully",
      });
    } else if (result.errors) {
      StoreUtils.handleError(result.errors);
    }
  }
}

const signUpStore = proxy(new SignUpStore());

export default signUpStore;
