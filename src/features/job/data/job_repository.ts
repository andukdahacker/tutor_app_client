import { Job } from "../../../domain/entities";
import { CreateJobInput } from "../../../domain/inputs";
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
}
