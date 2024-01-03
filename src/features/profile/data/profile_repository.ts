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
import client from "../../../shared/data/client";
import { Result } from "../../../shared/data/result";

export class ProfileRepository {
  static async updateBio(bio: string): Promise<Result<LearnerProfile>> {
    try {
      const response = await client.PUT("/learner-profile", { body: { bio } });

      if (response.error) {
        return {
          ok: false,
          error: new Error(response.error.message),
        };
      }

      return {
        ok: true,
        value: response.data,
      };
    } catch (error) {
      return {
        ok: false,
        error: new Error(),
      };
    }
  }

  static async createWorkExperience(
    input: CreateWorkExperienceInput
  ): Promise<Result<WorkExperience>> {
    try {
      const response = await client.POST("/work-experience", {
        body: {
          ...input,
        },
      });

      if (response.error) {
        return {
          ok: false,
          error: new Error(response.error.message),
        };
      }

      return {
        ok: true,
        value: response.data,
      };
    } catch (error) {
      return {
        ok: false,
        error: new Error(),
      };
    }
  }

  static async updateWorkExperience(
    input: UpdateWorkExperienceInput
  ): Promise<Result<WorkExperience>> {
    try {
      const response = await client.PUT("/work-experience", {
        body: {
          ...input,
        },
      });

      if (response.error) {
        return {
          ok: false,
          error: new Error(response.error.message),
        };
      }

      return {
        ok: true,
        value: response.data,
      };
    } catch (error) {
      return {
        ok: false,
        error: new Error(),
      };
    }
  }

  static async deleteWorkExperience(
    workExperienceId: string
  ): Promise<Result<WorkExperience>> {
    try {
      const response = await client.DELETE("/work-experience/{id}", {
        params: { path: { id: workExperienceId } },
      });

      if (response.error) {
        return {
          ok: false,
          error: new Error(response.error.message),
        };
      }

      return {
        ok: true,
        value: response.data,
      };
    } catch (error) {
      return {
        ok: false,
        error: new Error(),
      };
    }
  }

  static async createEducation(
    input: CreateEducationInput
  ): Promise<Result<Education>> {
    try {
      const response = await client.POST("/education", {
        body: {
          ...input,
        },
      });

      if (response.error) {
        return {
          ok: false,
          error: new Error(response.error.message),
        };
      }

      return {
        ok: true,
        value: response.data,
      };
    } catch (error) {
      return {
        ok: false,
        error: new Error(),
      };
    }
  }

  static async updateEducation(
    input: UpdateEducationInput
  ): Promise<Result<Education>> {
    try {
      const response = await client.PUT("/education", {
        body: {
          ...input,
        },
      });

      if (response.error) {
        return {
          ok: false,
          error: new Error(response.error.message),
        };
      }

      return {
        ok: true,
        value: response.data,
      };
    } catch (error) {
      return {
        ok: false,
        error: new Error(),
      };
    }
  }

  static async deleteEducation(
    educationId: string
  ): Promise<Result<Education>> {
    try {
      const response = await client.DELETE("/education/{id}", {
        params: { path: { id: educationId } },
      });

      if (response.error) {
        return {
          ok: false,
          error: new Error(response.error.message),
        };
      }

      return {
        ok: true,
        value: response.data,
      };
    } catch (error) {
      return {
        ok: false,
        error: new Error(),
      };
    }
  }

  static async updateTutorProfile(
    input: UpdateTutorProfileInput
  ): Promise<Result<TutorProfile>> {
    try {
      const response = await client.PUT("/tutor-profile", {
        body: {
          ...input,
        },
      });

      if (response.error) {
        return {
          ok: false,
          error: new Error(response.error.message),
        };
      }

      return {
        ok: true,
        value: response.data,
      };
    } catch (error) {
      return {
        ok: false,
        error: new Error(),
      };
    }
  }

  static async deleteTutorProfileSubject(
    input: DeleteTutorProfileSubjectInput
  ): Promise<Result<{ subjectId: string; tutorId: string }>> {
    try {
      const response = await client.DELETE("/tutor-profile", { body: input });

      if (response.error) {
        return {
          ok: false,
          error: new Error(response.error.message),
        };
      }

      return {
        ok: true,
        value: response.data,
      };
    } catch (error) {
      return {
        ok: false,
        error: new Error(),
      };
    }
  }
}
