import { Job, JobMethod, SortBy, Subject } from "@/generated/graphql";
import { appRepository } from "@/shared/data/app.repository";
import StoreUtils from "@/shared/utils/store.utils";
import { proxy } from "valtio";

export enum FindTarget {
  JOBS,
  TUTORS,
}

class FindStore {
  jobs: Job[] = [];
  subjects: Subject[] = [];
  findTarget: FindTarget = FindTarget.JOBS;
  searchString = "";

  changeSearchString(value: string) {
    this.searchString = value;
  }

  changeFindTarget(target: FindTarget) {
    this.findTarget = target;
  }

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

  async getSubjects(searchString: string) {
    const result = await appRepository.getSubjects({
      searchString,
      take: 5,
    });

    if (result.errors) {
      StoreUtils.handleError(result.errors);
    } else if (result.data) {
      this.subjects = result.data.subjects.nodes;
    }
  }
}

export const findStore = proxy(new FindStore());
