import { toast } from "@/pages/_app";
import { GraphQLError } from "graphql";
import { GqlError } from "../data/client";
import { IError } from "../types/IError";

namespace StoreUtils {
  function isGraphqlError(error: GqlError): error is GraphQLError[] {
    return (error as GraphQLError[]).every((e) => e.message !== undefined);
  }

  function isNetworkError(error: GqlError): error is Error {
    return (error as Error).message !== undefined;
  }

  export function successToast(title: string, description?: string) {
    toast({
      title,
      status: "success",
      position: "top-right",
      duration: 3000,
      description,
    });
  }

  export function errorToast(title: string, description?: string) {
    toast({
      title,
      status: "error",
      position: "top-right",
      duration: 3000,
      description,
    });
  }

  export function handleError(error: GqlError) {
    if (isGraphqlError(error)) {
      error.forEach((e) => {
        if (e.extensions.originalError) {
          const error = e.extensions.originalError as IError;
          if (typeof error.message === "string") {
            errorToast(error.message);
          } else {
            error.message.forEach((err) => errorToast(err));
          }
        } else {
          errorToast(e.message);
        }
      });
    }

    if (isNetworkError(error)) {
      console.log(error.message);
    }
  }
}

export default StoreUtils;
