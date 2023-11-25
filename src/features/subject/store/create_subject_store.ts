import { Store } from "../../../shared/types/store";
import StoreUtils from "../../../shared/utils/store_utils";
import { CreateSubjectInput } from "../../find/data/types/inputs";
import SubjectRepository from "../data/subject_repository";

export class CreateSubjectStore implements Store {
  isLoading = false;

  async createSubject(input: CreateSubjectInput) {
    this.isLoading = true;
    const result = await SubjectRepository.createSubject(input);

    this.isLoading = false;
    if (result.ok) {
      StoreUtils.successToast("Success", "Created subject successfully");
      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }
}
