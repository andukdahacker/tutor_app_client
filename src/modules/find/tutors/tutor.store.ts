import { PageInfo, TutorProfile } from "@/generated/graphql";
import { appRepository } from "@/shared/data/app.repository";
import StoreUtils from "@/shared/utils/store.utils";
import { proxy } from "valtio";
import { findStore } from "../shared/find.store";

class TutorStore {
  tutors: TutorProfile[] = [];
  tutorPageInfo?: PageInfo;

  get canLoadMore() {
    return this.tutorPageInfo?.hasNextPage == true;
  }

  async findManyTutors() {
    findStore.showLoading();
    const result = await appRepository.findManyTutors({
      searchString: findStore.searchString,
      take: 10,
    });
    findStore.hideLoading();

    if (result.errors) {
      StoreUtils.handleError(result.errors);
    } else if (result.data) {
      this.tutors = result.data.tutorProfiles.nodes;
    }
  }
}

export const tutorStore = proxy(new TutorStore());
