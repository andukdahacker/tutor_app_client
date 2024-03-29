import { Subject } from "../../../domain/entities";
import { CreateSubjectInput } from "../../../domain/inputs";
import client from "../../../shared/data/client";
import { Result } from "../../../shared/data/result";

class SubjectRepository {
  static async createSubject(
    input: CreateSubjectInput
  ): Promise<Result<Subject>> {
    try {
      const response = await client.POST("/subject", { body: { ...input } });

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

export default SubjectRepository;
