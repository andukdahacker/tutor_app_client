import { JobMethod, JobType, SortBy } from "../../../domain/entities";
import { Store } from "../../../shared/types/store";

export const findTargets = ["Jobs", "Tutors"] as const;

export type FindTarget = (typeof findTargets)[number];

export class FindStore implements Store {
  findTarget: FindTarget = "Jobs";
  searchString = "";
  isLoading = false;
  maxFee = 1000000;
  minFee = 100000;
  sortBy: SortBy = "asc";
  jobMethod: JobMethod = "BOTH";
  jobType: JobType = "TUTOR";

  changeMaxFee(value: number) {
    this.maxFee = value;
  }

  changeMinFee(value: number) {
    this.minFee = value;
  }

  changeSortBy(value: SortBy) {
    this.sortBy = value;
  }

  changeJobMethod(value: JobMethod) {
    this.jobMethod = value;
  }

  changeSearchString(value: string) {
    this.searchString = value;
  }

  changeFindTarget(target: FindTarget) {
    this.findTarget = target;
  }

  showLoading() {
    this.isLoading = true;
  }

  hideLoading() {
    this.isLoading = false;
  }

  get isFindingJobs() {
    return this.findTarget == "Jobs";
  }

  get isFindingTutors() {
    return this.findTarget == "Tutors";
  }
}

// export const findStore = proxy(new FindStore());
