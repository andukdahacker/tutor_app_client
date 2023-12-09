import { PageInfo, TutorProfile } from "../../../domain/entities";
import StoreUtils from "../../../shared/utils/store_utils";
import { FindRepository } from "../data/find_repository";

export class TutorStore {
  tutors: TutorProfile[] = [];
  tutorPageInfo?: PageInfo;
  isLoadingMore = false;
  isLoading = false;

  get canLoadMore() {
    return this.tutorPageInfo?.hasNextPage == true;
  }

  async findManyTutors(searchString: string) {
    this.isLoading = true;
    const result = await FindRepository.findManyTutors({
      searchString: searchString,
      take: 10,
    });

    this.isLoading = false;

    if (!result.ok) {
      StoreUtils.handleError(result.error);
    } else {
      this.tutors = result.value?.nodes ?? [];
      this.tutorPageInfo = result.value?.pageInfo;
    }
  }

  async loadMoreTutors(searchString: string) {
    this.isLoadingMore = true;
    const result = await FindRepository.findManyTutors({
      searchString: searchString,
      take: 10,
      stringCursor: this.tutorPageInfo?.cursor as string,
    });

    this.isLoadingMore = false;
    if (!result.ok) {
      StoreUtils.handleError(result.error);
    } else {
      this.tutors = [...this.tutors, ...(result.value?.nodes ?? [])];
      this.tutorPageInfo = result.value?.pageInfo;
    }
  }
}
