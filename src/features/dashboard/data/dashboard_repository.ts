import { Job, JobConnection, Paginated } from "../../../domain/entities";
import {
  FindJobConnectionsInput,
  FindJobsByLearnerInput,
} from "../../../domain/inputs";
import client from "../../../shared/data/client";
import { Result } from "../../../shared/data/result";

class DashboardRepository {
  static async getLearnerJobs(
    input: FindJobsByLearnerInput
  ): Promise<Result<Paginated<Job>>> {
    try {
      const response = await client.GET("/job/learner", {
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

  static async getJobConnection(
    input: FindJobConnectionsInput
  ): Promise<Result<Paginated<JobConnection>>> {
    try {
      const response = await client.GET("/job-connection", {
        params: { query: input },
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

  static async getTutorJobConnections(
    input: FindJobConnectionsInput
  ): Promise<Result<Paginated<JobConnection>>> {
    try {
      const response = await client.GET("/job-connection/tutor", {
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
}

export default DashboardRepository;
