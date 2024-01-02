import { components, operations } from "../schema/schema";

export type LoginInput = components["schemas"]["LoginInput"];
export type SignUpInput = components["schemas"]["SignUpInput"];

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

export type DeleteJobConnectionInput =
  operations["JobConnectionController_deleteConnection"]["requestBody"]["content"]["application/json"];

export type CreateJobInput = components["schemas"]["CreateJobInput"];

export type CreateWorkExperienceInput =
  components["schemas"]["CreateWorkExperienceInput"];

export type UpdateWorkExperienceInput =
  components["schemas"]["UpdateWorkExperienceInput"];

export type CreateEducationInput =
  components["schemas"]["CreateEducationInput"];

export type UpdateEducationInput =
  components["schemas"]["UpdateEducationInput"];

export type UpdateTutorProfileInput =
  components["schemas"]["UpdateTutorProfileInput"];
