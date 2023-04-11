import { toast } from "@/pages/_app";
import { CombinedError } from "@urql/core";
import { IError } from "./types/IError";

export abstract class Store {
  handleError(error: CombinedError) {
    if (error.graphQLErrors) {
      error.graphQLErrors.forEach((e) => {
        if (e.extensions.originalError) {
          const error = e.extensions.originalError as IError;
          if (typeof error.message === "string") {
            toast({
              title: error.message,
            });
          } else {
            error.message.forEach((err) => toast({ title: err }));
          }
        } else {
          toast({
            title: e.message,
          });
        }
      });
    }

    if (error.networkError) {
      console.log(error.networkError.message);
    }
  }
}
