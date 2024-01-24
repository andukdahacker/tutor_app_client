import { JobConnection, PageInfo } from "../../../domain/entities";
import { Store } from "../../../shared/types/store";
import StoreUtils from "../../../shared/utils/store_utils";
import DashboardRepository from "../data/dashboard_repository";

class TutorCurrentJobStore implements Store {
  jobConnections: JobConnection[] = [];
  pageInfo?: PageInfo;

  async getTutorCurrentConnections(tutorId: string) {
    const result = await DashboardRepository.getTutorJobConnections({
      take: 10,
      tutorId,
      status: "ACCEPTED",
      jobStatus: "EMPLOYED",
    });

    if (result.ok) {
      this.jobConnections = result.value?.nodes ?? [];
      this.pageInfo = result.value?.pageInfo;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async loadMoreTutorCurrentConnections(tutorId: string) {
    const result = await DashboardRepository.getTutorJobConnections({
      take: 10,
      stringCursor: this.pageInfo?.cursor?.toString(),
      tutorId,
      status: "ACCEPTED",
      jobStatus: "EMPLOYED",
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

export default TutorCurrentJobStore;
