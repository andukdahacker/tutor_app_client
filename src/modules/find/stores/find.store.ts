import { Job, JobMethod, SortBy, Subject } from "@/generated/graphql";
import { appRepository } from "@/shared/data/app.repository";
import StoreUtils from "@/shared/utils/store.utils";
import { proxy } from "valtio";

export const findTargets = ["Jobs", "Tutors"] as const;

export type FindTarget = (typeof findTargets)[number];

class FindStore {
  jobs: Job[] = [];
  subjects: Subject[] = [];
  findTarget: FindTarget = "Jobs";
  searchString = "";

  changeSearchString(value: string) {
    this.searchString = value;
  }

  changeFindTarget(target: FindTarget) {
    this.findTarget = target;
  }

  async find() {
    switch (this.findTarget) {
      case "Jobs":
        await this.findManyJobs();
        break;
      case "Tutors":
        break;
      default:
        break;
    }
  }

  async findManyJobs() {
    const result = await appRepository.findManyJobs({
      searchString: this.searchString,
      sortBy: SortBy.Asc,
      take: 10,
      jobMethod: JobMethod.Both,
    });

    if (result.errors) {
      StoreUtils.handleError(result.errors);
    } else if (result.data) {
      this.jobs = result.data.jobs.nodes ?? [];
    }
  }

  async getSubjects() {
    const result = await appRepository.getSubjects({
      searchString: this.searchString,
      take: 10,
    });

    if (result.errors) {
      StoreUtils.handleError(result.errors);
    } else if (result.data) {
      this.subjects = result.data.subjects.nodes;
    }
  }
}

export const findStore = proxy(new FindStore());
