import { Job, JobConnection, Paginated } from "../../../domain/entities";
import {
  CreateJobInput,
  DeclineJobConnectionInput,
  FindJobConnectionsInput,
} from "../../../domain/inputs";
import client from "../../../shared/data/client";
import { Result } from "../../../shared/data/result";

export class JobRepository {
  static async createJob(input: CreateJobInput): Promise<Result<Job>> {
    try {
      const response = await client.POST("/job", { body: { ...input } });

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

  static async findJobById(jobId: string): Promise<Result<Job>> {
    try {
      const response = await client.GET("/job/{jobId}", {
        params: {
          path: {
            jobId,
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

  static async getJobJobConnections(
    input: FindJobConnectionsInput
  ): Promise<Result<Paginated<JobConnection>>> {
    try {
      const response = await client.GET("/job-connection/job", {
        params: {
          query: input,
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

  static async declineJobConnection(
    input: DeclineJobConnectionInput
  ): Promise<Result<JobConnection>> {
    const response = await client.PUT("/job-connection/decline", {
      body: input,
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
  }
}
