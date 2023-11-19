import client from "../../../shared/data/client";
import { Result } from "../../../shared/data/result";
import {
  Job,
  JobConnection,
  Paginated,
  Subject,
  TutorProfile,
} from "./types/entities";
import {
  CreateJobConnectionInput,
  FindManyJobsInput,
  FindManySubjectsInput,
  FindManyTutorsInput,
} from "./types/inputs";

export class FindRepository {
  static async findManyJobs(
    input: FindManyJobsInput
  ): Promise<Result<Paginated<Job>>> {
    try {
      const response = await client.GET("/job", {
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

  static async findManyTutors(
    input: FindManyTutorsInput
  ): Promise<Result<Paginated<TutorProfile>>> {
    try {
      const response = await client.GET("/tutor-profile", {
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
