import { proxy } from "valtio";
import { jobStore } from "../../jobs/data/job.store";
import { tutorStore } from "../../tutors/data/tutor.store";

export const findTargets = ["Jobs", "Tutors"] as const;

export type FindTarget = (typeof findTargets)[number];

class FindStore {
  findTarget: FindTarget = "Jobs";
  searchString = "";
  isLoading = false;

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

  get showLoadMoreJobs() {
    return this.isFindingJobs && jobStore.canLoadMore;
  }

  get isFindingTutors() {
    return this.findTarget == "Tutors";
  }

  get showLoadMoreTutors() {
    return this.isFindingTutors && tutorStore.canLoadMore;
  }

  async find() {
    switch (this.findTarget) {
      case "Jobs":
        await jobStore.findManyJobs();
        break;
      case "Tutors":
        await tutorStore.findManyTutors();
        break;
      default:
        break;
    }
  }
}

export const findStore = proxy(new FindStore());
