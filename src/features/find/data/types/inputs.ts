import { components, operations } from "../../../../schema/schema";

export type FindManyJobsInput =
  operations["JobController_jobs"]["parameters"]["query"];

export type CreateJobConnectionInput =
  components["schemas"]["CreateJobConnectInput"];

export type FindManyTutorsInput =
  operations["TutorProfileController_tutorProfiles"]["parameters"]["query"];

export type FindManySubjectsInput =
  operations["SubjectController_subjects"]["parameters"]["query"];

export type CreateSubjectInput =
  operations["SubjectController_createSubject"]["requestBody"]["content"]["application/json"];
