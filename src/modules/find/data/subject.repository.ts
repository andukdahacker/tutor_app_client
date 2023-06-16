import { FindManySubjectsInput, GetSubjectsQuery } from "@/generated/graphql";
import { GqlFetchResult } from "@/shared/data/client";

export interface SubjectRepository {
  getSubjects(
    input: FindManySubjectsInput
  ): Promise<GqlFetchResult<GetSubjectsQuery>>;
}
