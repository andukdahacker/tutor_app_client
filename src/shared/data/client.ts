import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { AnyVariables } from "@urql/core";
import { GraphQLError } from "graphql";

export type GqlVariables =
  | AnyVariables
  | Record<string, any>
  | void
  | undefined;

export type GqlError = Error | GraphQLError[];

export type GqlFetchResult<T = any> = {
  data?: T;
  errors?: GqlError;
};

export interface GqlClient {
  query<T = any, V extends GqlVariables = GqlVariables>(
    query: TypedDocumentNode<T, V>,
    variables: V
  ): Promise<GqlFetchResult<T>>;
  mutation<T = any, V extends GqlVariables = GqlVariables>(
    mutation: TypedDocumentNode<T, V>,
    variables: V
  ): Promise<GqlFetchResult<T>>;
  subscription<T = any, V extends GqlVariables = GqlVariables>(
    subscription: TypedDocumentNode<T, V>,
    variables: V
  ): Promise<GqlFetchResult<T>>;
}
