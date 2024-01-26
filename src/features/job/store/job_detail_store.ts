import { Job, JobConnection, PageInfo } from '../../../domain/entities';
import {
  AcceptJobConnectionInput,
  DeclineJobConnectionInput,
  DisconnectJobConnectionInput,
  GetAcceptedJobConnectionInput,
} from '../../../domain/inputs';
import { Store } from '../../../shared/types/store';
import StoreUtils from '../../../shared/utils/store_utils';
import { JobRepository } from '../data/job_repository';

class JobDetailStore implements Store {
  job?: Job;
  jobConnections: JobConnection[] = [];
  pageInfo?: PageInfo;
  acceptedJobConnection?: JobConnection;

  async findJobById(jobId: string) {
    const result = await JobRepository.findJobById(jobId);

    if (result.ok) {
      this.job = result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async getJobConnections(jobId: string) {
    const result = await JobRepository.getJobJobConnections({
      take: 10,
      jobId,
      status: 'REQUESTED',
    });

    if (result.ok) {
      this.jobConnections = result.value?.nodes ?? [];
      this.pageInfo = result.value?.pageInfo;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async loadMoreJobConnections(jobId: string) {
    const result = await JobRepository.getJobJobConnections({
      take: 10,
      jobId,
      stringCursor: this.pageInfo?.cursor?.toString(),
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

  async declineJobConnection(input: DeclineJobConnectionInput) {
    const result = await JobRepository.declineJobConnection(input);

    if (result.ok) {
      StoreUtils.successToast('Decline successfully');
      const index = this.jobConnections.findIndex(
        (e) =>
          e.jobId == result.value.jobId && e.tutorId == result.value.tutorId,
      );

      if (index > -1) {
        this.jobConnections.splice(index, 1);
      }
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async acceptJobConnection(input: AcceptJobConnectionInput) {
    const result = await JobRepository.acceptJobConnection(input);

    if (result.ok) {
      StoreUtils.successToast('Accepted tutor successfully');
      this.acceptedJobConnection = result.value.jobConnection;

      if (this.job) {
        this.job.jobStatus = 'EMPLOYED';
      }
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async getAcceptedJobConnection(input: GetAcceptedJobConnectionInput) {
    const result = await JobRepository.getAcceptedJobConnection(input);

    if (result.ok) {
      this.acceptedJobConnection = result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async disconnectJobConnection(input: DisconnectJobConnectionInput) {
    const result = await JobRepository.disconnectJobConnection(input);

    if (result.ok) {
      StoreUtils.successToast('Disconnected successfully');
    } else {
      StoreUtils.handleError(result.error);
    }
  }
}

export default JobDetailStore;
