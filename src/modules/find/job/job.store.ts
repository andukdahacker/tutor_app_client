import { Job, JobMethod, SortBy } from "@/generated/graphql";
import { appRepository } from "@/shared/data/app.repository";
import StoreUtils from "@/shared/utils/store.utils";
import { proxy } from "valtio";

class JobStore {
  jobs: Job[] = [];

  async findManyJobs(searchString: string) {
    const result = await appRepository.findManyJobs({
      searchString,
      sortBy: SortBy.Asc,
      take: 5,
      jobMethod: JobMethod.Both,
    });

    if (result.errors) {
      StoreUtils.handleError(result.errors);
    } else if (result.data) {
      this.jobs = result.data.jobs.nodes ?? [];
    }
  }
}

export const jobStore = proxy(new JobStore());
