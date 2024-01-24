import {
  Education,
  LearnerProfile,
  TutorProfile,
  WorkExperience,
} from "../../../domain/entities";
import {
  CreateEducationInput,
  CreateWorkExperienceInput,
  DeleteTutorProfileSubjectInput,
  UpdateEducationInput,
  UpdateTutorProfileInput,
  UpdateWorkExperienceInput,
} from "../../../domain/inputs";
import { Store } from "../../../shared/types/store";
import StoreUtils from "../../../shared/utils/store_utils";
import { ProfileRepository } from "../data/profile_repository";

export class ProfileStore implements Store {
  learnerProfile: LearnerProfile | null = null;
  tutorProfile: TutorProfile | null = null;
  workExperience: WorkExperience[] = [];
  education: Education[] = [];

  async getLearnerProfile(userId: string) {
    const result = await ProfileRepository.getLearnerProfile(userId);

    if (result.ok) {
      this.learnerProfile = result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async getTutorProfile(userId: string) {
    const result = await ProfileRepository.getTutorProfile(userId);

    if (result.ok) {
      this.tutorProfile = result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async updateBio(bio: string) {
    const result = await ProfileRepository.updateBio(bio);

    if (result.ok) {
      StoreUtils.successToast("Update bio successfully");
      this.learnerProfile = result.value;
      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async createWorkExperience(input: CreateWorkExperienceInput) {
    const result = await ProfileRepository.createWorkExperience(input);

    if (result.ok) {
      StoreUtils.successToast("Create work experience successfully");

      this.workExperience.push(result.value);

      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async deleteWorkExperience(workExpId: string) {
    const result = await ProfileRepository.deleteWorkExperience(workExpId);

    if (result.ok) {
      StoreUtils.successToast("Deleted work experience successfully");
      const index = this.workExperience.findIndex(
        (e) => e.id == result.value.id
      );

      if (index > -1) {
        this.workExperience.splice(index, 1);
      }
      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async updateWorkExperience(input: UpdateWorkExperienceInput) {
    const result = await ProfileRepository.updateWorkExperience(input);

    if (result.ok) {
      StoreUtils.successToast("Update work experience successfully");
      const index = this.workExperience.findIndex(
        (e) => e.id == result.value.id
      );

      if (index > -1) {
        this.workExperience[index] = result.value;
      }
      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async updateEducation(input: UpdateEducationInput) {
    const result = await ProfileRepository.updateEducation(input);

    if (result.ok) {
      StoreUtils.successToast("Update education successfully");

      const index = this.education.findIndex((e) => e.id == result.value.id);

      this.education[index] = result.value;
      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async createEducation(input: CreateEducationInput) {
    const result = await ProfileRepository.createEducation(input);

    if (result.ok) {
      StoreUtils.successToast("Create education successfully");
      this.education.push(result.value);
      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async deleteEducation(eduId: string) {
    const result = await ProfileRepository.deleteEducation(eduId);

    if (result.ok) {
      StoreUtils.successToast("Deleted education successfully");
      const index = this.education.findIndex((e) => e.id == result.value.id);

      if (index > -1) {
        this.education.splice(index, 1);
      }
      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async updateTutorProfile(input: UpdateTutorProfileInput) {
    const result = await ProfileRepository.updateTutorProfile(input);

    if (result.ok) {
      StoreUtils.successToast("Updated tutor profile successfully");
      this.tutorProfile = result.value;
      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }

  async deleteTutorProfileSubject(input: DeleteTutorProfileSubjectInput) {
    const result = await ProfileRepository.deleteTutorProfileSubject(input);

    if (result.ok) {
      StoreUtils.successToast("Deleted subject successfully");

      if (this.tutorProfile) {
        const newSubjectList = this.tutorProfile?.tutorProfileSubject?.filter(
          (e) => e.subjectId != input.subjectId
        );
        this.tutorProfile.tutorProfileSubject = newSubjectList;
      }

      return result.value;
    } else {
      StoreUtils.handleError(result.error);
    }
  }
}
