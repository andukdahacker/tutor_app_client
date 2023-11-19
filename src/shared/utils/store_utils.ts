import { toast } from "../../main";

declare module "valtio" {
  function useSnapshot<T extends object>(p: T): T;
}
class StoreUtils {
  static async successToast(title: string, description?: string) {
    toast({
      title,
      status: "success",
      position: "top-right",
      duration: 3000,
      description,
    });
  }

  static async errorToast(title: string, description?: string) {
    toast({
      title,
      status: "error",
      position: "top-right",
      duration: 3000,
      description,
    });
  }

  static handleError(error: Error) {
    this.errorToast("Something went wrong", error.message);
  }
}

export default StoreUtils;
