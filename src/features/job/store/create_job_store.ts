import { Subject } from "../../../domain/entities";
import { CreateJobInput } from "../../../domain/inputs";
import { Store } from "../../../shared/types/store";
import StoreUtils from "../../../shared/utils/store_utils";
import { JobRepository } from "../data/job_repository";

export class CreateJobStore implements Store {
  isLoading = false;
  newSubject: Subject | null = null;

  async createJob(input: CreateJobInput) {
    this.isLoading = true;

    const result = await JobRepository.createJob(input);

    this.isLoading = false;

    if (result.ok) {
      StoreUtils.successToast("Success", `Created new job successfully`);
      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  onCreateSubjectSuccess(subject: Subject) {
    this.newSubject = subject;
  }
}
