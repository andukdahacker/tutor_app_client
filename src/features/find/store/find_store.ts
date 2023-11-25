import { Store } from "../../../shared/types/store";
import { JobMethod, JobType } from "../../job/data/domain/entities";
import { SortBy } from "../data/types/entities";

export const findTargets = ["Jobs", "Tutors"] as const;

export type FindTarget = (typeof findTargets)[number];

export class FindStore implements Store {
  findTarget: FindTarget = "Jobs";
  searchString = "";
  isLoading = false;
  sortBy: SortBy = "asc";
  jobMethod: JobMethod = "BOTH";
  jobType: JobType = "TUTOR";

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
