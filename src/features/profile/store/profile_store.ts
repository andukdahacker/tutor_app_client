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
}
