import { Job, PageInfo, User } from "../../../domain/entities";
import {
  DeleteJobConnectionInput,
  FindManyJobsInput,
} from "../../../domain/inputs";
import StoreUtils from "../../../shared/utils/store_utils";

import { FindRepository } from "../data/find_repository";

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

  async findManyJobs(input: FindManyJobsInput) {
    this.isLoading = true;
    const result = await FindRepository.findManyJobs({ ...input });

    this.isLoading = false;

    if (!result.ok) {
      StoreUtils.handleError(result.error);
    } else {
      this.jobs = result.value?.nodes ?? [];
      this.jobPageInfo = result.value?.pageInfo;
    }
  }

  async loadMoreJobs(input: FindManyJobsInput) {
    this.showLoadingMore();
    const result = await FindRepository.findManyJobs({
      ...input,
      stringCursor: this.jobPageInfo?.cursor?.toString(),
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
      StoreUtils.successToast("Success", "Apply for job successfully");
      const newJob = this.jobs.findIndex((e) => e.id == job.id);
      this.jobs[newJob].jobConnections.push(result.value);
    }
  }

  async deleteJobConnection(input: DeleteJobConnectionInput) {
    const result = await FindRepository.deleteJobConnection({
      ...input,
    });

    if (result.ok) {
      StoreUtils.successToast("Success", "Remove application successfully");
      const newJob = this.jobs.findIndex((e) => e.id == input.jobId);
      this.jobs[newJob].jobConnections = [];
    } else {
      StoreUtils.handleError(result.error);
    }
  }
}
