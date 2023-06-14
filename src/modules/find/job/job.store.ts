import { FindManyJobsInput, Job } from "@/generated/graphql";
import { appRepository } from "@/shared/data/app.repository";
import StoreUtils from "@/shared/utils/store.utils";
import { proxy } from "valtio";

class JobStore {
  jobs: Job[] = [];

  async findManyJobs(input: FindManyJobsInput) {
    const result = await appRepository.findManyJobs(input);

    if (result.errors) {
      StoreUtils.handleError(result.errors);
    } else if (result.data) {
      console.log(result.data);
    }
  }
}

export const jobStore = proxy(new JobStore());
