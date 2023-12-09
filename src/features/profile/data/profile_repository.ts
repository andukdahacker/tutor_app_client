import { LearnerProfile } from "../../../domain/entities";
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
}
