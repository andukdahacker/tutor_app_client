import { PageInfo, Subject } from "@/generated/graphql";
import { appRepository } from "@/shared/data/app.repository";
import StoreUtils from "@/shared/utils/store.utils";
import { proxy } from "valtio";
import { findStore } from "../shared/find.store";

class SubjectStore {
  subjects: Subject[] = [];
  subjectPageInfo?: PageInfo;

  get canLoadMore() {
    return this.subjectPageInfo?.hasNextPage == true;
  }

  async getSubjects() {
    findStore.showLoading();
    const result = await appRepository.getSubjects({
      searchString: findStore.searchString,
      take: 10,
    });

    findStore.hideLoading();

    if (result.errors) {
      StoreUtils.handleError(result.errors);
    } else if (result.data) {
      this.subjects = result.data.subjects.nodes;
      this.subjectPageInfo = result.data.subjects.pageInfo;
    }
  }
}

export const subjectStore = proxy(new SubjectStore());
