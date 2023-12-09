import {
  Education,
  LearnerProfile,
  User,
  WorkExperience,
} from "../../../domain/entities";
import { LoginInput, SignUpInput } from "../../../domain/inputs";
import { RoutesPath, router } from "../../../routes/router";
import StoreUtils from "../../../shared/utils/store_utils";
import AuthRepository from "../data/auth_repository";
import { ACCESS_TOKEN_KEY } from "./constants";

export class AuthStore {
  constructor() {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (token) {
      this.isAuthenticated = true;
    }
  }

  isAuthenticated = false;
  user: User | null | undefined = null;
  isLoading = false;

  updateLearnerProfile(learnerProfile: LearnerProfile) {
    if (this.user) {
      this.user.learnerProfile = learnerProfile;
    }
  }

  updateWorkExperience(workExperience: WorkExperience[]) {
    if (this.user) {
      this.user.workExperience = workExperience;
    }
  }

  updateEducation(education: Education[]) {
    if (this.user) {
      this.user.education = education;
    }
  }

  hideLoading() {
    this.isLoading = false;
  }

  showLoading() {
    this.isLoading = true;
  }

  async refreshAccessToken() {
    this.showLoading();
    const result = await AuthRepository.refreshAccessToken();
    this.hideLoading();
    if (result.ok) {
      localStorage.setItem(ACCESS_TOKEN_KEY, result.value?.accessToken ?? "");
      this.isAuthenticated = true;
    } else if (result) {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      this.isAuthenticated = false;
      router.navigate(RoutesPath.findPage);
    }
  }

  async checkIfAuthenticated() {
    this.showLoading();
    const result = await AuthRepository.me();
    this.hideLoading();
    if (result.ok) {
      this.isAuthenticated = true;
      this.user = result.value;
    } else {
      this.isAuthenticated = false;
      router.navigate(RoutesPath.root);
      StoreUtils.handleError(result.error);
    }
  }

  async logIn(loginInput: LoginInput) {
    const result = await AuthRepository.login(loginInput);
    if (result.ok) {
      StoreUtils.successToast("Logged in successfully");
      localStorage.setItem(ACCESS_TOKEN_KEY, result.value?.access_token ?? "");
      this.isAuthenticated = true;
      this.user = result.value?.user;
      router.navigate(RoutesPath.findPage);
    } else {
      StoreUtils.errorToast("Log in failed", result.error.message);
      StoreUtils.handleError(result.error);
    }
  }

  async logOut() {
    const result = await AuthRepository.logOut();

    if (result.ok) {
      StoreUtils.successToast("Logged out successfully");
      this.isAuthenticated = false;
      this.user = null;
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      router.navigate(RoutesPath.root);
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async signUp(signUpInput: SignUpInput) {
    const result = await AuthRepository.signUp(signUpInput);

    if (result.ok) {
      StoreUtils.successToast("Signed up successfully");
    } else {
      StoreUtils.handleError(result.error);
    }
  }
}
