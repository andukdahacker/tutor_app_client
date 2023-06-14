import {
  FindManyJobsDocument,
  FindManyJobsInput,
  FindManyJobsQuery,
  LoginDocument,
  LoginInput,
  LogoutDocument,
  MeDocument,
  RefreshAccessTokenDocument,
  SignUpDocument,
  SignUpInput,
} from "@/generated/graphql";
import { AuthRepository } from "@/modules/auth/data/auth.repository";
import { JobRepository } from "@/modules/find/job/data/job.repository";
import { GqlFetchResult } from "./client";
import { urql } from "./urql";

export class GqlRepository implements AuthRepository, JobRepository {
  async findManyJobs(
    input: FindManyJobsInput
  ): Promise<GqlFetchResult<FindManyJobsQuery>> {
    return await urql.query(FindManyJobsDocument, {
      findManyJobsInput: {
        ...input,
      },
    });
  }

  async logIn(loginInput: LoginInput) {
    return await urql.mutation(LoginDocument, {
      loginInput: {
        email: loginInput.email,
        password: loginInput.password,
      },
    });
  }

  async signUp(signUpInput: SignUpInput) {
    return await urql.mutation(SignUpDocument, {
      signUpInput: {
        username: signUpInput.username,
        email: signUpInput.email,
        password: signUpInput.password,
      },
    });
  }

  async logOut() {
    return await urql.mutation(LogoutDocument, {});
  }

  async refreshAccessToken() {
    return await urql.mutation(RefreshAccessTokenDocument, {});
  }

  async me() {
    return await urql.query(MeDocument, {});
  }
}
