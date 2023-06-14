import { GqlRepository } from "./graphql.repository";

class AppRepository extends GqlRepository {}

export const appRepository = new AppRepository();
