import {
  LoginInput,
  LoginMutation,
  LogoutMutation,
  MeQuery,
  SignUpInput,
  SignUpMutation,
} from "@/generated/graphql";
import { GqlFetchResult } from "@/shared/data/client";

export interface AuthRepository {
  logIn(loginInput: LoginInput): Promise<GqlFetchResult<LoginMutation>>;
  signUp(signUpInput: SignUpInput): Promise<GqlFetchResult<SignUpMutation>>;
  logOut(): Promise<GqlFetchResult<LogoutMutation>>;
  me(): Promise<GqlFetchResult<MeQuery>>;
}
