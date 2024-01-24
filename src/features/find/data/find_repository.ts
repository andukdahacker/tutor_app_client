import {
  Job,
  JobConnection,
  Paginated,
  Subject,
  TutorProfile,
} from "../../../domain/entities";
import {
  CreateJobConnectionInput,
  DeleteJobConnectionInput,
  FindManyJobsInput,
  FindManySubjectsInput,
  FindManyTutorsInput,
} from "../../../domain/inputs";
import client from "../../../shared/data/client";
import { Result } from "../../../shared/data/result";

export class FindRepository {
  static async findManyJobs(
    input: FindManyJobsInput
  ): Promise<Result<Paginated<Job>>> {
    try {
      const response = await client.GET("/job/list", {
        params: { query: { ...input } },
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
      console.log(error);
      return {
        ok: false,
        error: new Error(),
      };
    }
  }

  static async createJobConnection(
    input: CreateJobConnectionInput
  ): Promise<Result<JobConnection>> {
    try {
      const response = await client.POST("/job-connection", {
        body: { ...input },
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
      console.log(error);

      return {
        ok: false,
        error: new Error(),
      };
    }
  }

  static async deleteJobConnection(
    input: DeleteJobConnectionInput
  ): Promise<Result<JobConnection>> {
    try {
      const response = await client.POST("/job-connection/delete", {
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
      console.log(error);

      return {
        ok: false,
        error: new Error(),
      };
    }
  }

  static async findManyTutors(
    input: FindManyTutorsInput
  ): Promise<Result<Paginated<TutorProfile>>> {
    try {
      const response = await client.GET("/tutor-profile/list", {
        params: {
          query: {
            ...input,
          },
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
      console.log(error);

      return {
        ok: false,
        error: new Error(),
      };
    }
  }

  static async findSubjects(
    input: FindManySubjectsInput
  ): Promise<Result<Paginated<Subject>>> {
    try {
      const response = await client.GET("/subject", {
        params: {
          query: {
            ...input,
          },
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
      console.log(error);

      return {
        ok: false,
        error: new Error(),
      };
    }
  }
}
