import { Job, PageInfo } from "../../../domain/entities";
import { Store } from "../../../shared/types/store";
import StoreUtils from "../../../shared/utils/store_utils";
import DashboardRepository from "../data/dashboard_repository";

class LearnerJobStore implements Store {
  jobs: Job[] = [];
  pageInfo?: PageInfo;

  async getLearnerJobs() {
    const result = await DashboardRepository.getLearnerJobs({
      take: 10,
    });

    if (result.ok) {
      this.jobs = result.value?.nodes ?? [];
      this.pageInfo = result.value?.pageInfo;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async loadMoreLearnerJobs() {
    if (!this.pageInfo?.hasNextPage) return;
    const result = await DashboardRepository.getLearnerJobs({
      take: this.pageInfo?.lastTake ?? 10,
      stringCursor: this.pageInfo?.cursor?.toString(),
    });

    if (result.ok) {
      this.jobs = [...this.jobs, ...(result.value?.nodes ?? [])];
      this.pageInfo = result.value?.pageInfo;
    } else {
      StoreUtils.handleError(result.error);
    }
  }
}

export default LearnerJobStore;
