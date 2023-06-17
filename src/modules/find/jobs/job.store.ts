import { Job, JobMethod, PageInfo, SortBy } from "@/generated/graphql";
import { appRepository } from "@/shared/data/app.repository";
import StoreUtils from "@/shared/utils/store.utils";
import { proxy } from "valtio";
import { findStore } from "../shared/find.store";

class JobStore {
  jobs: Job[] = [];
  jobPageInfo?: PageInfo;
  isLoadingMore = false;

  get canLoadMore() {
    return this.jobPageInfo?.hasNextPage == true;
  }

  showLoadingMore() {
    this.isLoadingMore = true;
  }

  hideLoadingMore() {
    this.isLoadingMore = false;
  }

  async findManyJobs() {
    findStore.showLoading();
    const result = await appRepository.findManyJobs({
      searchString: findStore.searchString,
      sortBy: SortBy.Asc,
      take: 10,
      jobMethod: JobMethod.Both,
    });

    findStore.hideLoading();

    if (result.errors) {
      StoreUtils.handleError(result.errors);
    } else if (result.data) {
      this.jobs = result.data.jobs.nodes ?? [];
      this.jobPageInfo = result.data.jobs.pageInfo;
    }
  }

  async loadMoreJobs() {
    this.showLoadingMore();
    const result = await appRepository.findManyJobs({
      searchString: findStore.searchString,
      sortBy: SortBy.Asc,
      take: 10,
      jobMethod: JobMethod.Both,
      stringCursor: this.jobPageInfo?.cursor?.value as string,
    });

    this.hideLoadingMore();

    if (result.errors) {
      StoreUtils.handleError(result.errors);
    } else if (result.data) {
      this.jobs = [...this.jobs, ...result.data.jobs.nodes];
      this.jobPageInfo = result.data.jobs.pageInfo;
    }
  }
}

export const jobStore = proxy(new JobStore());
