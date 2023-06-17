import {
  FindManyTutorProfilesInput,
  FindManyTutorsQuery,
} from "@/generated/graphql";
import { GqlFetchResult } from "@/shared/data/client";

export interface TutorRepository {
  findManyTutors(
    input: FindManyTutorProfilesInput
  ): Promise<GqlFetchResult<FindManyTutorsQuery>>;
}
