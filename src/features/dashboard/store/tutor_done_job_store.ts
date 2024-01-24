import { JobConnection, PageInfo } from "../../../domain/entities";
import { Store } from "../../../shared/types/store";
import StoreUtils from "../../../shared/utils/store_utils";
import DashboardRepository from "../data/dashboard_repository";

class TutorDoneJobStore implements Store {
  jobConnections: JobConnection[] = [];
  pageInfo?: PageInfo;

  async getTutorDoneConnections(tutorId: string) {
    const result = await DashboardRepository.getTutorJobConnections({
      take: 10,
      tutorId,
      status: "ACCEPTED",
      jobStatus: "DONE",
    });

    if (result.ok) {
      this.jobConnections = result.value?.nodes ?? [];
      this.pageInfo = result.value?.pageInfo;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async loadMoreTutorDoneConnections(tutorId: string) {
    const result = await DashboardRepository.getTutorJobConnections({
      take: 10,
      stringCursor: this.pageInfo?.cursor?.toString(),
      tutorId,
      status: "ACCEPTED",
      jobStatus: "DONE",
    });

    if (result.ok) {
      this.jobConnections = [
        ...this.jobConnections,
        ...(result.value?.nodes ?? []),
      ];
      this.pageInfo = result.value?.pageInfo;
    } else {
      StoreUtils.handleError(result.error);
    }
  }
}

export default TutorDoneJobStore;
