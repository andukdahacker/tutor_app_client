import StoreUtils from "../../../shared/utils/store_utils";
import { User } from "../../auth/data/domain/entities";

import { FindRepository } from "../data/find_repository";
import { Job, PageInfo } from "../data/types/entities";

export class JobStore {
  jobs: Job[] = [];
  jobPageInfo?: PageInfo;
  isLoadingMore = false;
  isLoading = false;

  get canLoadMore() {
    return this.jobPageInfo?.hasNextPage == true;
  }

  showLoadingMore() {
    this.isLoadingMore = true;
  }

  hideLoadingMore() {
    this.isLoadingMore = false;
  }

  async findManyJobs(searchString: string) {
    this.isLoading = true;
    const result = await FindRepository.findManyJobs({
      searchString: searchString,
      sortBy: "asc",
      take: 10,
      jobMethod: "BOTH",
    });

    this.isLoading = false;

    if (!result.ok) {
      StoreUtils.handleError(result.error);
    } else {
      this.jobs = result.value?.nodes ?? [];
      this.jobPageInfo = result.value?.pageInfo;
    }
  }

  async loadMoreJobs(searchString: string) {
    this.showLoadingMore();
    const result = await FindRepository.findManyJobs({
      searchString: searchString,
      sortBy: "asc",
      take: 10,
      jobMethod: "BOTH",
      stringCursor: this.jobPageInfo?.cursor.toString(),
    });

    this.hideLoadingMore();

    if (!result.ok) {
      StoreUtils.handleError(result.error);
    } else {
      this.jobs = [...this.jobs, ...(result.value?.nodes ?? [])];
      this.jobPageInfo = result.value?.pageInfo;
    }
  }

  async applyForJob(job: Job, currentUser: User) {
    const result = await FindRepository.createJobConnection({
      jobId: job.id,
      learnerUserId: job.learner?.userId ?? "",
      tutorId: currentUser?.tutorProfile?.id ?? "",
      tutorUserId: currentUser?.id ?? "",
      type: "TUTOR_TO_JOB",
    });

    if (!result.ok) {
      StoreUtils.handleError(result.error);
    } else {
    }
  }
}
