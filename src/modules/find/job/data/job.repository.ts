import { FindManyJobsInput, FindManyJobsQuery } from "@/generated/graphql";
import { GqlFetchResult } from "@/shared/data/client";

export interface JobRepository {
  findManyJobs(
    input: FindManyJobsInput
  ): Promise<GqlFetchResult<FindManyJobsQuery>>;
}
