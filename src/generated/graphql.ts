/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** `Date` type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  DateScalar: any;
  /** `Date` type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
};

export type AcceptJobConnectionInput = {
  jobId?: InputMaybe<Scalars['String']>;
  learnerUserId?: InputMaybe<Scalars['String']>;
  tutorId?: InputMaybe<Scalars['String']>;
  tutorUserId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type AcceptJobConnectionResponse = {
  __typename?: 'AcceptJobConnectionResponse';
  jobConnection?: Maybe<JobConnection>;
};

export type AcceptUserEventInput = {
  jobId: Scalars['String'];
  myScheduleId: Scalars['String'];
  otherScheduleId: Scalars['String'];
  userEventId: Scalars['String'];
};

export type ChangePasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type Chat = {
  __typename?: 'Chat';
  chatMembers: Array<ChatMember>;
  chatMessages?: Maybe<Array<Maybe<ChatMessage>>>;
  id: Scalars['String'];
  updatedAt: Scalars['DateScalar'];
};

export type ChatMember = {
  __typename?: 'ChatMember';
  isRead: Scalars['Boolean'];
  isViewed: Scalars['Boolean'];
  joinedAt: Scalars['DateScalar'];
  leftAt?: Maybe<Scalars['DateScalar']>;
};

export type ChatMessage = {
  __typename?: 'ChatMessage';
  author: User;
  content: Scalars['String'];
  createdAt: Scalars['DateScalar'];
  id: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateScalar']>;
};

export enum ConnectionStatus {
  Accepted = 'ACCEPTED',
  Declined = 'DECLINED',
  Requested = 'REQUESTED'
}

export type CreateChatInput = {
  message?: InputMaybe<Scalars['String']>;
  receiverId: Scalars['String'];
};

export type CreateEducationInput = {
  description?: InputMaybe<Scalars['String']>;
  educationEntity?: InputMaybe<Scalars['String']>;
  educationEntityUrl?: InputMaybe<Scalars['String']>;
  fromDate?: InputMaybe<Scalars['DateScalar']>;
  toDate?: InputMaybe<Scalars['DateScalar']>;
};

export type CreateJobConnectInput = {
  jobId: Scalars['String'];
  learnerUserId: Scalars['String'];
  tutorId: Scalars['String'];
  tutorUserId: Scalars['String'];
  type: Scalars['String'];
};

export type CreateJobConnectResponse = {
  __typename?: 'CreateJobConnectResponse';
  jobConnection?: Maybe<JobConnection>;
};

export type CreateJobInput = {
  description?: InputMaybe<Scalars['String']>;
  fee: Scalars['BigInt'];
  jobMethod: Scalars['String'];
  jobType: Scalars['String'];
  learnerId: Scalars['String'];
  subjectId: Scalars['String'];
  title: Scalars['String'];
};

export type CreateJobResponse = {
  __typename?: 'CreateJobResponse';
  job?: Maybe<Job>;
};

export type CreateLeanerProfileResponse = {
  __typename?: 'CreateLeanerProfileResponse';
  leanerProfile?: Maybe<LearnerProfile>;
};

export type CreateLearnerProfileInput = {
  bio: Scalars['String'];
};

export type CreateMessageInput = {
  chatId: Scalars['String'];
  content: Scalars['String'];
};

export type CreateRatingInput = {
  comment?: InputMaybe<Scalars['String']>;
  jobId: Scalars['String'];
  ratedId: Scalars['String'];
  raterId: Scalars['String'];
  score: Scalars['Float'];
};

export type CreateSubjectInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateSubjectResponse = {
  __typename?: 'CreateSubjectResponse';
  subject?: Maybe<Subject>;
};

export type CreateTutorProfileInput = {
  bio: Scalars['String'];
};

export type CreateUserEventInput = {
  endTime: Scalars['DateScalar'];
  jobId: Scalars['String'];
  startTime: Scalars['DateScalar'];
};

export type CreateWorkExperienceInput = {
  description?: InputMaybe<Scalars['String']>;
  fromDate: Scalars['DateScalar'];
  position: Scalars['String'];
  toDate: Scalars['DateScalar'];
  workplace: Scalars['String'];
  workplaceUrl?: InputMaybe<Scalars['String']>;
};

export type Cursor = IntCursor | StringCursor;

export type DeclineJobConnectinoResponse = {
  __typename?: 'DeclineJobConnectinoResponse';
  jobConnection?: Maybe<JobConnection>;
};

export type DeclineJobConnectionInput = {
  jobId?: InputMaybe<Scalars['String']>;
  learnerUserId?: InputMaybe<Scalars['String']>;
  tutorId?: InputMaybe<Scalars['String']>;
  tutorUserId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type DeleteChatMessageInput = {
  chatId: Scalars['String'];
  chatMessageId: Scalars['String'];
};

export type DeleteRatingInput = {
  jobId: Scalars['String'];
  ratedId: Scalars['String'];
  raterId: Scalars['String'];
};

export type EditChatMessageInput = {
  chatId: Scalars['String'];
  chatMessage: Scalars['String'];
  chatMessageId: Scalars['String'];
};

export type Education = {
  __typename?: 'Education';
  description?: Maybe<Scalars['String']>;
  educationEntity: Scalars['String'];
  educationEntityUrl?: Maybe<Scalars['String']>;
  fromDate: Scalars['DateScalar'];
  id: Scalars['String'];
  toDate: Scalars['DateScalar'];
};

export type FindJobResponse = {
  __typename?: 'FindJobResponse';
  nodes: Array<Job>;
  pageInfo: PageInfo;
};

export type FindManyJobsInput = {
  fee?: InputMaybe<Scalars['Int']>;
  jobMethod?: InputMaybe<JobMethod>;
  jobType?: InputMaybe<Scalars['String']>;
  searchString: Scalars['String'];
  sortBy: SortBy;
  stringCursor?: InputMaybe<Scalars['String']>;
  take: Scalars['Int'];
};

export type FindManySubjectsInput = {
  searchString: Scalars['String'];
  stringCursor?: InputMaybe<Scalars['String']>;
  take: Scalars['Int'];
};

export type FindManySubjectsRespones = {
  __typename?: 'FindManySubjectsRespones';
  nodes: Array<Subject>;
  pageInfo: PageInfo;
};

export type FindManyTutorProfilesInput = {
  searchString: Scalars['String'];
  stringCursor?: InputMaybe<Scalars['String']>;
  take: Scalars['Int'];
};

export type FindManyTutorProfilesResponse = {
  __typename?: 'FindManyTutorProfilesResponse';
  nodes: Array<TutorProfile>;
  pageInfo: PageInfo;
};

export type GetChatMessagesInput = {
  chatId: Scalars['String'];
  stringCursor?: InputMaybe<Scalars['String']>;
  take: Scalars['Int'];
};

export type GetChatsInput = {
  stringCursor?: InputMaybe<Scalars['String']>;
  take: Scalars['Int'];
};

export type GetChatsResponse = {
  __typename?: 'GetChatsResponse';
  nodes: Array<Chat>;
  pageInfo: PageInfo;
};

export type GetManyNotificationsInput = {
  stringCursor?: InputMaybe<Scalars['String']>;
  take: Scalars['Int'];
};

export type GetManyNotificationsResponse = {
  __typename?: 'GetManyNotificationsResponse';
  nodes: Array<Notification>;
  pageInfo: PageInfo;
};

export type GetMessagesResponse = {
  __typename?: 'GetMessagesResponse';
  nodes: Array<ChatMessage>;
  pageInfo: PageInfo;
};

export type GetRequestedJobsForTutorResponse = {
  __typename?: 'GetRequestedJobsForTutorResponse';
  nodes: Array<JobConnection>;
  pageInfo: PageInfo;
};

export type IntCursor = {
  __typename?: 'IntCursor';
  value: Scalars['Int'];
};

export type Job = {
  __typename?: 'Job';
  connections?: Maybe<Array<Maybe<JobConnection>>>;
  createdAt: Scalars['Timestamp'];
  description?: Maybe<Scalars['String']>;
  fee: Scalars['BigInt'];
  id: Scalars['String'];
  learner: LearnerProfile;
  subject: Subject;
  title: Scalars['String'];
};

export enum JobConnectType {
  JobToTutor = 'JOB_TO_TUTOR',
  TutorToJob = 'TUTOR_TO_JOB'
}

export type JobConnection = {
  __typename?: 'JobConnection';
  jobId: Scalars['String'];
  status: ConnectionStatus;
  tutorId: Scalars['String'];
  type: JobConnectType;
};

export type JobConnectionWhereInput = {
  jobId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  stringCursor?: InputMaybe<Scalars['String']>;
  take: Scalars['Int'];
  tutorId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export enum JobMethod {
  Both = 'BOTH',
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

export type LearnerProfile = {
  __typename?: 'LearnerProfile';
  bio?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  userId: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String'];
  user: User;
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  message: Scalars['String'];
};

export type MeResponse = {
  __typename?: 'MeResponse';
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptJobConnection: AcceptJobConnectionResponse;
  acceptUserEvent: UserEvent;
  changePassword: User;
  createChat: Chat;
  createEducation: Education;
  createJob: CreateJobResponse;
  createJobConnection: CreateJobConnectResponse;
  createLearnerProfile: CreateLeanerProfileResponse;
  createMessage: ChatMessage;
  createRating: Rating;
  createSubject: CreateSubjectResponse;
  createTutorProfile?: Maybe<TutorProfile>;
  createUserEvent: UserEvent;
  createWorkExperience: WorkExperience;
  declineJobConnection: DeclineJobConnectinoResponse;
  deleteChatMessage: ChatMessage;
  deleteEducation: Education;
  deleteRating: Rating;
  deleteWorkExperience: WorkExperience;
  editChatMessage: ChatMessage;
  forgotPassword: Scalars['Boolean'];
  login: LoginResponse;
  logout: LogoutResponse;
  refreshAccessToken: RefreshAccessTokenResponse;
  signUp: SignUpResponse;
  updateEducation: Education;
  updateLearnerProfile: UpdateLearnerProfileResponse;
  updateRating: Rating;
  updateTutorProfile?: Maybe<TutorProfile>;
  updateWorkExperience: WorkExperience;
  verifyEmail: User;
};


export type MutationAcceptJobConnectionArgs = {
  acceptJobConnectionInput: AcceptJobConnectionInput;
  connectionType: Scalars['String'];
};


export type MutationAcceptUserEventArgs = {
  acceptUserEventInput: AcceptUserEventInput;
};


export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};


export type MutationCreateChatArgs = {
  createChatInput: CreateChatInput;
};


export type MutationCreateEducationArgs = {
  createEducationInput: CreateEducationInput;
};


export type MutationCreateJobArgs = {
  createJob: CreateJobInput;
};


export type MutationCreateJobConnectionArgs = {
  createJobConnectInput: CreateJobConnectInput;
};


export type MutationCreateLearnerProfileArgs = {
  createLearnerProfileInput: CreateLearnerProfileInput;
};


export type MutationCreateMessageArgs = {
  createMessageInput: CreateMessageInput;
};


export type MutationCreateRatingArgs = {
  createRatingInput: CreateRatingInput;
};


export type MutationCreateSubjectArgs = {
  createSubjectInput: CreateSubjectInput;
};


export type MutationCreateTutorProfileArgs = {
  createTutorProfileInput: CreateTutorProfileInput;
};


export type MutationCreateUserEventArgs = {
  createUserEventInput: CreateUserEventInput;
};


export type MutationCreateWorkExperienceArgs = {
  createWorkExperienceInput: CreateWorkExperienceInput;
};


export type MutationDeclineJobConnectionArgs = {
  declineJobConnectionInput: DeclineJobConnectionInput;
};


export type MutationDeleteChatMessageArgs = {
  deleteChatMessageInput: DeleteChatMessageInput;
};


export type MutationDeleteEducationArgs = {
  educationId: Scalars['String'];
};


export type MutationDeleteRatingArgs = {
  deleteRatingInput: DeleteRatingInput;
};


export type MutationDeleteWorkExperienceArgs = {
  workExperienceId: Scalars['String'];
};


export type MutationEditChatMessageArgs = {
  editChatMessageInput: EditChatMessageInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationUpdateEducationArgs = {
  updateEducationInput: UpdateEducationInput;
};


export type MutationUpdateLearnerProfileArgs = {
  updateLearnerProfileInput: UpdateLearnerProfileInput;
};


export type MutationUpdateRatingArgs = {
  updateRatingInput: UpdateRatingInput;
};


export type MutationUpdateTutorProfileArgs = {
  updateTutorProfileInput: UpdateTutorProfileInput;
};


export type MutationUpdateWorkExperienceArgs = {
  updateWorkExperienceInput: UpdateWorkExperienceInput;
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String'];
};

export type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['DateScalar'];
  id: Scalars['String'];
  isRead: Scalars['Boolean'];
  itemId?: Maybe<Scalars['String']>;
  notificationType: NotificationType;
  notifier?: Maybe<User>;
};

export enum NotificationType {
  LearnerAccept = 'LEARNER_ACCEPT',
  LearnerDecline = 'LEARNER_DECLINE',
  LearnerRequest = 'LEARNER_REQUEST',
  TutorAccept = 'TUTOR_ACCEPT',
  TutorDecline = 'TUTOR_DECLINE',
  TutorRequest = 'TUTOR_REQUEST'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  cursor?: Maybe<Cursor>;
  hasNextPage: Scalars['Boolean'];
  lastTake: Scalars['Int'];
  totalAmount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  chats: GetChatsResponse;
  getManyNotifications: GetManyNotificationsResponse;
  jobConnections: GetRequestedJobsForTutorResponse;
  jobs: FindJobResponse;
  me: MeResponse;
  messages: GetMessagesResponse;
  subjects: FindManySubjectsRespones;
  tutorProfiles: FindManyTutorProfilesResponse;
};


export type QueryChatsArgs = {
  getChatInput: GetChatsInput;
};


export type QueryGetManyNotificationsArgs = {
  getManyNotificationsInput: GetManyNotificationsInput;
};


export type QueryJobConnectionsArgs = {
  jobConnectionWhereInput: JobConnectionWhereInput;
};


export type QueryJobsArgs = {
  findManyJobsInput: FindManyJobsInput;
};


export type QueryMessagesArgs = {
  getChatMessagesInput: GetChatMessagesInput;
};


export type QuerySubjectsArgs = {
  findManySubjectsInput: FindManySubjectsInput;
};


export type QueryTutorProfilesArgs = {
  findManyTutorProfilesInput: FindManyTutorProfilesInput;
};

export type Rating = {
  __typename?: 'Rating';
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateScalar'];
  job: Job;
  rated: User;
  rater: User;
  score: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateScalar']>;
};

export type RefreshAccessTokenResponse = {
  __typename?: 'RefreshAccessTokenResponse';
  access_token: Scalars['String'];
};

export type Schedule = {
  __typename?: 'Schedule';
  id: Scalars['String'];
  user: User;
};

export type SignUpInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type SignUpResponse = {
  __typename?: 'SignUpResponse';
  user: User;
};

export enum SortBy {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringCursor = {
  __typename?: 'StringCursor';
  value: Scalars['String'];
};

export type Subject = {
  __typename?: 'Subject';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  subscribeChatMessages: ChatMessage;
  subscribeNotifications: Notification;
};


export type SubscriptionSubscribeNotificationsArgs = {
  userId: Scalars['String'];
};

export type TutorProfile = {
  __typename?: 'TutorProfile';
  bio?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  jobConnections?: Maybe<Array<Maybe<JobConnection>>>;
  tutorProfileSubjects?: Maybe<Array<Maybe<TutorProfileSubject>>>;
  user: User;
};

export type TutorProfileSubject = {
  __typename?: 'TutorProfileSubject';
  subject: Subject;
  tutor: TutorProfile;
};

export type UpdateEducationInput = {
  description?: InputMaybe<Scalars['String']>;
  educationEntity?: InputMaybe<Scalars['String']>;
  educationEntityUrl?: InputMaybe<Scalars['String']>;
  fromDate?: InputMaybe<Scalars['DateScalar']>;
  id?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['DateScalar']>;
};

export type UpdateLearnerProfileInput = {
  bio?: InputMaybe<Scalars['String']>;
};

export type UpdateLearnerProfileResponse = {
  __typename?: 'UpdateLearnerProfileResponse';
  learnerProfile?: Maybe<LearnerProfile>;
};

export type UpdateRatingInput = {
  comment?: InputMaybe<Scalars['String']>;
  jobId?: InputMaybe<Scalars['String']>;
  ratedId?: InputMaybe<Scalars['String']>;
  raterId?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['Float']>;
};

export type UpdateTutorProfileInput = {
  bio?: InputMaybe<Scalars['String']>;
};

export type UpdateWorkExperienceInput = {
  description?: InputMaybe<Scalars['String']>;
  fromDate?: InputMaybe<Scalars['DateScalar']>;
  position?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['DateScalar']>;
  workExperienceId: Scalars['String'];
  workplace?: InputMaybe<Scalars['String']>;
  workplaceUrl?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateScalar'];
  email: Scalars['String'];
  id: Scalars['String'];
  isVerified: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['DateScalar']>;
  username: Scalars['String'];
};

export type UserEvent = {
  __typename?: 'UserEvent';
  endTime: Scalars['DateScalar'];
  id: Scalars['String'];
  job?: Maybe<Job>;
  startTime: Scalars['DateScalar'];
  userEventStatus: Scalars['String'];
};

export type WorkExperience = {
  __typename?: 'WorkExperience';
  fromDate: Scalars['DateScalar'];
  id: Scalars['String'];
  position: Scalars['String'];
  toDate: Scalars['DateScalar'];
  workplace: Scalars['String'];
  workplaceUrl?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'User', id: string, email: string, username: string, createdAt: any, isVerified: boolean } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'LogoutResponse', message: string } };

export type RefreshAccessTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshAccessTokenMutation = { __typename?: 'Mutation', refreshAccessToken: { __typename?: 'RefreshAccessTokenResponse', access_token: string } };

export type SignUpMutationVariables = Exact<{
  signUpInput: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'SignUpResponse', user: { __typename?: 'User', id: string, username: string, email: string, createdAt: any, isVerified: boolean } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'MeResponse', user?: { __typename?: 'User', id: string, username: string, email: string, createdAt: any, isVerified: boolean } | null } };

export type FindManyJobsQueryVariables = Exact<{
  findManyJobsInput: FindManyJobsInput;
}>;


export type FindManyJobsQuery = { __typename?: 'Query', jobs: { __typename?: 'FindJobResponse', nodes: Array<{ __typename?: 'Job', id: string, title: string, description?: string | null, fee: any, createdAt: any, learner: { __typename?: 'LearnerProfile', userId: string, id: string, bio?: string | null }, subject: { __typename?: 'Subject', id: string, name: string, description?: string | null } }> } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const RefreshAccessTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshAccessToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshAccessToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}}]}}]}}]} as unknown as DocumentNode<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signUpInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signUpInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}}]}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const FindManyJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindManyJobs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"findManyJobsInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FindManyJobsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"findManyJobsInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"findManyJobsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"learner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<FindManyJobsQuery, FindManyJobsQueryVariables>;