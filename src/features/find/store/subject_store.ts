import StoreUtils from "../../../shared/utils/store_utils";
import { FindRepository } from "../data/find_repository";
import { PageInfo, Subject } from "../data/types/entities";

export class SubjectStore {
  subjects: Subject[] = [];
  subjectPageInfo?: PageInfo;
  isLoading = false;

  get canLoadMore() {
    return this.subjectPageInfo?.hasNextPage == true;
  }

  async getSubjects(searchString: string) {
    this.isLoading = true;
    const result = await FindRepository.findSubjects({
      searchString: searchString,
      take: 10,
    });
    this.isLoading = false;

    if (!result.ok) {
      StoreUtils.handleError(result.error);
    } else {
      this.subjects = result.value?.nodes ?? [];
      this.subjectPageInfo = result.value?.pageInfo;
    }
  }
}
