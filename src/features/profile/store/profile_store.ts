import {
  CreateEducationInput,
  CreateWorkExperienceInput,
  UpdateEducationInput,
  UpdateTutorProfileInput,
  UpdateWorkExperienceInput,
} from "../../../domain/inputs";
import { Store } from "../../../shared/types/store";
import StoreUtils from "../../../shared/utils/store_utils";
import { ProfileRepository } from "../data/profile_repository";

export class ProfileStore implements Store {
  async updateBio(bio: string) {
    const result = await ProfileRepository.updateBio(bio);

    if (result.ok) {
      StoreUtils.successToast("Update bio successfully");
      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async createWorkExperience(input: CreateWorkExperienceInput) {
    const result = await ProfileRepository.createWorkExperience(input);

    if (result.ok) {
      StoreUtils.successToast("Create work experience successfully");
      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async deleteWorkExperience(workExpId: string) {
    const result = await ProfileRepository.deleteWorkExperience(workExpId);

    if (result.ok) {
      StoreUtils.successToast("Deleted work experience successfully");
      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async updateWorkExperience(input: UpdateWorkExperienceInput) {
    const result = await ProfileRepository.updateWorkExperience(input);

    if (result.ok) {
      StoreUtils.successToast("Update work experience successfully");
      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async updateEducation(input: UpdateEducationInput) {
    const result = await ProfileRepository.updateEducation(input);

    if (result.ok) {
      StoreUtils.successToast("Update education successfully");
      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async createEducation(input: CreateEducationInput) {
    const result = await ProfileRepository.createEducation(input);

    if (result.ok) {
      StoreUtils.successToast("Create education successfully");
      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async deleteEducation(eduId: string) {
    const result = await ProfileRepository.deleteEducation(eduId);

    if (result.ok) {
      StoreUtils.successToast("Deleted education successfully");
      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async updateTutorProfile(input: UpdateTutorProfileInput) {
    const result = await ProfileRepository.updateTutorProfile(input);

    if (result.ok) {
      StoreUtils.successToast("Updated tutor profile successfully");
      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }
}
