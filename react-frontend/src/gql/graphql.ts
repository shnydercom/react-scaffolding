/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateDrugsMutationResponse = {
  __typename?: 'CreateDrugsMutationResponse';
  drugs: Array<Drug>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateMedicalStudiesMutationResponse = {
  __typename?: 'CreateMedicalStudiesMutationResponse';
  info: CreateInfo;
  medicalStudies: Array<MedicalStudy>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type Drug = {
  __typename?: 'Drug';
  alcoholWarning?: Maybe<Scalars['String']['output']>;
  dosageForm?: Maybe<Scalars['String']['output']>;
  foodWarning?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  study?: Maybe<MedicalStudy>;
  studyAggregate?: Maybe<DrugMedicalStudyStudyAggregationSelection>;
  studyConnection: DrugStudyConnection;
  subjectOfStudy?: Maybe<MedicalStudy>;
  subjectOfStudyAggregate?: Maybe<DrugMedicalStudySubjectOfStudyAggregationSelection>;
  subjectOfStudyConnection: DrugSubjectOfStudyConnection;
};


export type DrugStudyArgs = {
  options?: InputMaybe<MedicalStudyOptions>;
  where?: InputMaybe<MedicalStudyWhere>;
};


export type DrugStudyAggregateArgs = {
  where?: InputMaybe<MedicalStudyWhere>;
};


export type DrugStudyConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DrugStudyConnectionSort>>;
  where?: InputMaybe<DrugStudyConnectionWhere>;
};


export type DrugSubjectOfStudyArgs = {
  options?: InputMaybe<MedicalStudyOptions>;
  where?: InputMaybe<MedicalStudyWhere>;
};


export type DrugSubjectOfStudyAggregateArgs = {
  where?: InputMaybe<MedicalStudyWhere>;
};


export type DrugSubjectOfStudyConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DrugSubjectOfStudyConnectionSort>>;
  where?: InputMaybe<DrugSubjectOfStudyConnectionWhere>;
};

export type DrugAggregateSelection = {
  __typename?: 'DrugAggregateSelection';
  alcoholWarning: StringAggregateSelection;
  count: Scalars['Int']['output'];
  dosageForm: StringAggregateSelection;
  foodWarning: StringAggregateSelection;
  name: StringAggregateSelection;
};

export type DrugConnectInput = {
  study?: InputMaybe<DrugStudyConnectFieldInput>;
  subjectOfStudy?: InputMaybe<DrugSubjectOfStudyConnectFieldInput>;
};

export type DrugConnectWhere = {
  node: DrugWhere;
};

export type DrugCreateInput = {
  alcoholWarning?: InputMaybe<Scalars['String']['input']>;
  dosageForm?: InputMaybe<Scalars['String']['input']>;
  foodWarning?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  study?: InputMaybe<DrugStudyFieldInput>;
  subjectOfStudy?: InputMaybe<DrugSubjectOfStudyFieldInput>;
};

export type DrugDeleteInput = {
  study?: InputMaybe<DrugStudyDeleteFieldInput>;
  subjectOfStudy?: InputMaybe<DrugSubjectOfStudyDeleteFieldInput>;
};

export type DrugDisconnectInput = {
  study?: InputMaybe<DrugStudyDisconnectFieldInput>;
  subjectOfStudy?: InputMaybe<DrugSubjectOfStudyDisconnectFieldInput>;
};

export type DrugMedicalStudyStudyAggregationSelection = {
  __typename?: 'DrugMedicalStudyStudyAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<DrugMedicalStudyStudyNodeAggregateSelection>;
};

export type DrugMedicalStudyStudyNodeAggregateSelection = {
  __typename?: 'DrugMedicalStudyStudyNodeAggregateSelection';
  name: StringAggregateSelection;
};

export type DrugMedicalStudySubjectOfStudyAggregationSelection = {
  __typename?: 'DrugMedicalStudySubjectOfStudyAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<DrugMedicalStudySubjectOfStudyNodeAggregateSelection>;
};

export type DrugMedicalStudySubjectOfStudyNodeAggregateSelection = {
  __typename?: 'DrugMedicalStudySubjectOfStudyNodeAggregateSelection';
  name: StringAggregateSelection;
};

export type DrugOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more DrugSort objects to sort Drugs by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<DrugSort>>>;
};

export type DrugRelationInput = {
  study?: InputMaybe<DrugStudyCreateFieldInput>;
  subjectOfStudy?: InputMaybe<DrugSubjectOfStudyCreateFieldInput>;
};

/** Fields to sort Drugs by. The order in which sorts are applied is not guaranteed when specifying many fields in one DrugSort object. */
export type DrugSort = {
  alcoholWarning?: InputMaybe<SortDirection>;
  dosageForm?: InputMaybe<SortDirection>;
  foodWarning?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type DrugStudyAggregateInput = {
  AND?: InputMaybe<Array<DrugStudyAggregateInput>>;
  OR?: InputMaybe<Array<DrugStudyAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<DrugStudyNodeAggregationWhereInput>;
};

export type DrugStudyConnectFieldInput = {
  connect?: InputMaybe<MedicalStudyConnectInput>;
  where?: InputMaybe<MedicalStudyConnectWhere>;
};

export type DrugStudyConnection = {
  __typename?: 'DrugStudyConnection';
  edges: Array<DrugStudyRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DrugStudyConnectionSort = {
  node?: InputMaybe<MedicalStudySort>;
};

export type DrugStudyConnectionWhere = {
  AND?: InputMaybe<Array<DrugStudyConnectionWhere>>;
  OR?: InputMaybe<Array<DrugStudyConnectionWhere>>;
  node?: InputMaybe<MedicalStudyWhere>;
  node_NOT?: InputMaybe<MedicalStudyWhere>;
};

export type DrugStudyCreateFieldInput = {
  node: MedicalStudyCreateInput;
};

export type DrugStudyDeleteFieldInput = {
  delete?: InputMaybe<MedicalStudyDeleteInput>;
  where?: InputMaybe<DrugStudyConnectionWhere>;
};

export type DrugStudyDisconnectFieldInput = {
  disconnect?: InputMaybe<MedicalStudyDisconnectInput>;
  where?: InputMaybe<DrugStudyConnectionWhere>;
};

export type DrugStudyFieldInput = {
  connect?: InputMaybe<DrugStudyConnectFieldInput>;
  create?: InputMaybe<DrugStudyCreateFieldInput>;
};

export type DrugStudyNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DrugStudyNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DrugStudyNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_EQUAL?: InputMaybe<Scalars['String']['input']>;
  name_GT?: InputMaybe<Scalars['Int']['input']>;
  name_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type DrugStudyRelationship = {
  __typename?: 'DrugStudyRelationship';
  cursor: Scalars['String']['output'];
  node: MedicalStudy;
};

export type DrugStudyUpdateConnectionInput = {
  node?: InputMaybe<MedicalStudyUpdateInput>;
};

export type DrugStudyUpdateFieldInput = {
  connect?: InputMaybe<DrugStudyConnectFieldInput>;
  create?: InputMaybe<DrugStudyCreateFieldInput>;
  delete?: InputMaybe<DrugStudyDeleteFieldInput>;
  disconnect?: InputMaybe<DrugStudyDisconnectFieldInput>;
  update?: InputMaybe<DrugStudyUpdateConnectionInput>;
  where?: InputMaybe<DrugStudyConnectionWhere>;
};

export type DrugSubjectOfStudyAggregateInput = {
  AND?: InputMaybe<Array<DrugSubjectOfStudyAggregateInput>>;
  OR?: InputMaybe<Array<DrugSubjectOfStudyAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<DrugSubjectOfStudyNodeAggregationWhereInput>;
};

export type DrugSubjectOfStudyConnectFieldInput = {
  connect?: InputMaybe<MedicalStudyConnectInput>;
  where?: InputMaybe<MedicalStudyConnectWhere>;
};

export type DrugSubjectOfStudyConnection = {
  __typename?: 'DrugSubjectOfStudyConnection';
  edges: Array<DrugSubjectOfStudyRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DrugSubjectOfStudyConnectionSort = {
  node?: InputMaybe<MedicalStudySort>;
};

export type DrugSubjectOfStudyConnectionWhere = {
  AND?: InputMaybe<Array<DrugSubjectOfStudyConnectionWhere>>;
  OR?: InputMaybe<Array<DrugSubjectOfStudyConnectionWhere>>;
  node?: InputMaybe<MedicalStudyWhere>;
  node_NOT?: InputMaybe<MedicalStudyWhere>;
};

export type DrugSubjectOfStudyCreateFieldInput = {
  node: MedicalStudyCreateInput;
};

export type DrugSubjectOfStudyDeleteFieldInput = {
  delete?: InputMaybe<MedicalStudyDeleteInput>;
  where?: InputMaybe<DrugSubjectOfStudyConnectionWhere>;
};

export type DrugSubjectOfStudyDisconnectFieldInput = {
  disconnect?: InputMaybe<MedicalStudyDisconnectInput>;
  where?: InputMaybe<DrugSubjectOfStudyConnectionWhere>;
};

export type DrugSubjectOfStudyFieldInput = {
  connect?: InputMaybe<DrugSubjectOfStudyConnectFieldInput>;
  create?: InputMaybe<DrugSubjectOfStudyCreateFieldInput>;
};

export type DrugSubjectOfStudyNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DrugSubjectOfStudyNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DrugSubjectOfStudyNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_EQUAL?: InputMaybe<Scalars['String']['input']>;
  name_GT?: InputMaybe<Scalars['Int']['input']>;
  name_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type DrugSubjectOfStudyRelationship = {
  __typename?: 'DrugSubjectOfStudyRelationship';
  cursor: Scalars['String']['output'];
  node: MedicalStudy;
};

export type DrugSubjectOfStudyUpdateConnectionInput = {
  node?: InputMaybe<MedicalStudyUpdateInput>;
};

export type DrugSubjectOfStudyUpdateFieldInput = {
  connect?: InputMaybe<DrugSubjectOfStudyConnectFieldInput>;
  create?: InputMaybe<DrugSubjectOfStudyCreateFieldInput>;
  delete?: InputMaybe<DrugSubjectOfStudyDeleteFieldInput>;
  disconnect?: InputMaybe<DrugSubjectOfStudyDisconnectFieldInput>;
  update?: InputMaybe<DrugSubjectOfStudyUpdateConnectionInput>;
  where?: InputMaybe<DrugSubjectOfStudyConnectionWhere>;
};

export type DrugUpdateInput = {
  alcoholWarning?: InputMaybe<Scalars['String']['input']>;
  dosageForm?: InputMaybe<Scalars['String']['input']>;
  foodWarning?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  study?: InputMaybe<DrugStudyUpdateFieldInput>;
  subjectOfStudy?: InputMaybe<DrugSubjectOfStudyUpdateFieldInput>;
};

export type DrugWhere = {
  AND?: InputMaybe<Array<DrugWhere>>;
  OR?: InputMaybe<Array<DrugWhere>>;
  alcoholWarning?: InputMaybe<Scalars['String']['input']>;
  alcoholWarning_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  alcoholWarning_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  alcoholWarning_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alcoholWarning_NOT?: InputMaybe<Scalars['String']['input']>;
  alcoholWarning_NOT_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  alcoholWarning_NOT_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  alcoholWarning_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alcoholWarning_NOT_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  alcoholWarning_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  dosageForm?: InputMaybe<Scalars['String']['input']>;
  dosageForm_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  dosageForm_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  dosageForm_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dosageForm_NOT?: InputMaybe<Scalars['String']['input']>;
  dosageForm_NOT_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  dosageForm_NOT_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  dosageForm_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dosageForm_NOT_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  dosageForm_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  foodWarning?: InputMaybe<Scalars['String']['input']>;
  foodWarning_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  foodWarning_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  foodWarning_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  foodWarning_NOT?: InputMaybe<Scalars['String']['input']>;
  foodWarning_NOT_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  foodWarning_NOT_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  foodWarning_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  foodWarning_NOT_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  foodWarning_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_NOT?: InputMaybe<Scalars['String']['input']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  study?: InputMaybe<MedicalStudyWhere>;
  studyAggregate?: InputMaybe<DrugStudyAggregateInput>;
  studyConnection?: InputMaybe<DrugStudyConnectionWhere>;
  studyConnection_NOT?: InputMaybe<DrugStudyConnectionWhere>;
  study_NOT?: InputMaybe<MedicalStudyWhere>;
  subjectOfStudy?: InputMaybe<MedicalStudyWhere>;
  subjectOfStudyAggregate?: InputMaybe<DrugSubjectOfStudyAggregateInput>;
  subjectOfStudyConnection?: InputMaybe<DrugSubjectOfStudyConnectionWhere>;
  subjectOfStudyConnection_NOT?: InputMaybe<DrugSubjectOfStudyConnectionWhere>;
  subjectOfStudy_NOT?: InputMaybe<MedicalStudyWhere>;
};

export type MedicalStudy = {
  __typename?: 'MedicalStudy';
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<MedicalStudyStatus>;
  study?: Maybe<Array<Maybe<MedicalStudy>>>;
  studyAggregate?: Maybe<MedicalStudyMedicalStudyStudyAggregationSelection>;
  studyConnection: MedicalStudyStudyConnection;
  studySubject?: Maybe<Drug>;
  studySubjectAggregate?: Maybe<MedicalStudyDrugStudySubjectAggregationSelection>;
  studySubjectConnection: MedicalStudyStudySubjectConnection;
};


export type MedicalStudyStudyArgs = {
  options?: InputMaybe<MedicalStudyOptions>;
  where?: InputMaybe<MedicalStudyWhere>;
};


export type MedicalStudyStudyAggregateArgs = {
  where?: InputMaybe<MedicalStudyWhere>;
};


export type MedicalStudyStudyConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MedicalStudyStudyConnectionSort>>;
  where?: InputMaybe<MedicalStudyStudyConnectionWhere>;
};


export type MedicalStudyStudySubjectArgs = {
  options?: InputMaybe<DrugOptions>;
  where?: InputMaybe<DrugWhere>;
};


export type MedicalStudyStudySubjectAggregateArgs = {
  where?: InputMaybe<DrugWhere>;
};


export type MedicalStudyStudySubjectConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MedicalStudyStudySubjectConnectionSort>>;
  where?: InputMaybe<MedicalStudyStudySubjectConnectionWhere>;
};

export type MedicalStudyAggregateSelection = {
  __typename?: 'MedicalStudyAggregateSelection';
  count: Scalars['Int']['output'];
  name: StringAggregateSelection;
};

export type MedicalStudyConnectInput = {
  study?: InputMaybe<Array<MedicalStudyStudyConnectFieldInput>>;
  studySubject?: InputMaybe<MedicalStudyStudySubjectConnectFieldInput>;
};

export type MedicalStudyConnectWhere = {
  node: MedicalStudyWhere;
};

export type MedicalStudyCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MedicalStudyStatus>;
  study?: InputMaybe<MedicalStudyStudyFieldInput>;
  studySubject?: InputMaybe<MedicalStudyStudySubjectFieldInput>;
};

export type MedicalStudyDeleteInput = {
  study?: InputMaybe<Array<MedicalStudyStudyDeleteFieldInput>>;
  studySubject?: InputMaybe<MedicalStudyStudySubjectDeleteFieldInput>;
};

export type MedicalStudyDisconnectInput = {
  study?: InputMaybe<Array<MedicalStudyStudyDisconnectFieldInput>>;
  studySubject?: InputMaybe<MedicalStudyStudySubjectDisconnectFieldInput>;
};

export type MedicalStudyDrugStudySubjectAggregationSelection = {
  __typename?: 'MedicalStudyDrugStudySubjectAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MedicalStudyDrugStudySubjectNodeAggregateSelection>;
};

export type MedicalStudyDrugStudySubjectNodeAggregateSelection = {
  __typename?: 'MedicalStudyDrugStudySubjectNodeAggregateSelection';
  alcoholWarning: StringAggregateSelection;
  dosageForm: StringAggregateSelection;
  foodWarning: StringAggregateSelection;
  name: StringAggregateSelection;
};

export type MedicalStudyMedicalStudyStudyAggregationSelection = {
  __typename?: 'MedicalStudyMedicalStudyStudyAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MedicalStudyMedicalStudyStudyNodeAggregateSelection>;
};

export type MedicalStudyMedicalStudyStudyNodeAggregateSelection = {
  __typename?: 'MedicalStudyMedicalStudyStudyNodeAggregateSelection';
  name: StringAggregateSelection;
};

export type MedicalStudyOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more MedicalStudySort objects to sort MedicalStudies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<MedicalStudySort>>>;
};

export type MedicalStudyRelationInput = {
  study?: InputMaybe<Array<MedicalStudyStudyCreateFieldInput>>;
  studySubject?: InputMaybe<MedicalStudyStudySubjectCreateFieldInput>;
};

/** Fields to sort MedicalStudies by. The order in which sorts are applied is not guaranteed when specifying many fields in one MedicalStudySort object. */
export type MedicalStudySort = {
  name?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
};

export enum MedicalStudyStatus {
  ActiveNotRecruiting = 'ActiveNotRecruiting',
  Completed = 'Completed',
  EnrollingByInvitation = 'EnrollingByInvitation',
  NotYetRecruiting = 'NotYetRecruiting',
  Recruiting = 'Recruiting',
  ResultsAvailable = 'ResultsAvailable',
  ResultsNotAvailable = 'ResultsNotAvailable',
  Suspended = 'Suspended',
  Terminated = 'Terminated',
  Withdrawn = 'Withdrawn'
}

export type MedicalStudyStudyAggregateInput = {
  AND?: InputMaybe<Array<MedicalStudyStudyAggregateInput>>;
  OR?: InputMaybe<Array<MedicalStudyStudyAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MedicalStudyStudyNodeAggregationWhereInput>;
};

export type MedicalStudyStudyConnectFieldInput = {
  connect?: InputMaybe<Array<MedicalStudyConnectInput>>;
  where?: InputMaybe<MedicalStudyConnectWhere>;
};

export type MedicalStudyStudyConnection = {
  __typename?: 'MedicalStudyStudyConnection';
  edges: Array<MedicalStudyStudyRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MedicalStudyStudyConnectionSort = {
  node?: InputMaybe<MedicalStudySort>;
};

export type MedicalStudyStudyConnectionWhere = {
  AND?: InputMaybe<Array<MedicalStudyStudyConnectionWhere>>;
  OR?: InputMaybe<Array<MedicalStudyStudyConnectionWhere>>;
  node?: InputMaybe<MedicalStudyWhere>;
  node_NOT?: InputMaybe<MedicalStudyWhere>;
};

export type MedicalStudyStudyCreateFieldInput = {
  node: MedicalStudyCreateInput;
};

export type MedicalStudyStudyDeleteFieldInput = {
  delete?: InputMaybe<MedicalStudyDeleteInput>;
  where?: InputMaybe<MedicalStudyStudyConnectionWhere>;
};

export type MedicalStudyStudyDisconnectFieldInput = {
  disconnect?: InputMaybe<MedicalStudyDisconnectInput>;
  where?: InputMaybe<MedicalStudyStudyConnectionWhere>;
};

export type MedicalStudyStudyFieldInput = {
  connect?: InputMaybe<Array<MedicalStudyStudyConnectFieldInput>>;
  create?: InputMaybe<Array<MedicalStudyStudyCreateFieldInput>>;
};

export type MedicalStudyStudyNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MedicalStudyStudyNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MedicalStudyStudyNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_EQUAL?: InputMaybe<Scalars['String']['input']>;
  name_GT?: InputMaybe<Scalars['Int']['input']>;
  name_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type MedicalStudyStudyRelationship = {
  __typename?: 'MedicalStudyStudyRelationship';
  cursor: Scalars['String']['output'];
  node: MedicalStudy;
};

export type MedicalStudyStudySubjectAggregateInput = {
  AND?: InputMaybe<Array<MedicalStudyStudySubjectAggregateInput>>;
  OR?: InputMaybe<Array<MedicalStudyStudySubjectAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MedicalStudyStudySubjectNodeAggregationWhereInput>;
};

export type MedicalStudyStudySubjectConnectFieldInput = {
  connect?: InputMaybe<DrugConnectInput>;
  where?: InputMaybe<DrugConnectWhere>;
};

export type MedicalStudyStudySubjectConnection = {
  __typename?: 'MedicalStudyStudySubjectConnection';
  edges: Array<MedicalStudyStudySubjectRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MedicalStudyStudySubjectConnectionSort = {
  node?: InputMaybe<DrugSort>;
};

export type MedicalStudyStudySubjectConnectionWhere = {
  AND?: InputMaybe<Array<MedicalStudyStudySubjectConnectionWhere>>;
  OR?: InputMaybe<Array<MedicalStudyStudySubjectConnectionWhere>>;
  node?: InputMaybe<DrugWhere>;
  node_NOT?: InputMaybe<DrugWhere>;
};

export type MedicalStudyStudySubjectCreateFieldInput = {
  node: DrugCreateInput;
};

export type MedicalStudyStudySubjectDeleteFieldInput = {
  delete?: InputMaybe<DrugDeleteInput>;
  where?: InputMaybe<MedicalStudyStudySubjectConnectionWhere>;
};

export type MedicalStudyStudySubjectDisconnectFieldInput = {
  disconnect?: InputMaybe<DrugDisconnectInput>;
  where?: InputMaybe<MedicalStudyStudySubjectConnectionWhere>;
};

export type MedicalStudyStudySubjectFieldInput = {
  connect?: InputMaybe<MedicalStudyStudySubjectConnectFieldInput>;
  create?: InputMaybe<MedicalStudyStudySubjectCreateFieldInput>;
};

export type MedicalStudyStudySubjectNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MedicalStudyStudySubjectNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MedicalStudyStudySubjectNodeAggregationWhereInput>>;
  alcoholWarning_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  alcoholWarning_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  alcoholWarning_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  alcoholWarning_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  alcoholWarning_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  alcoholWarning_EQUAL?: InputMaybe<Scalars['String']['input']>;
  alcoholWarning_GT?: InputMaybe<Scalars['Int']['input']>;
  alcoholWarning_GTE?: InputMaybe<Scalars['Int']['input']>;
  alcoholWarning_LONGEST_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  alcoholWarning_LONGEST_GT?: InputMaybe<Scalars['Int']['input']>;
  alcoholWarning_LONGEST_GTE?: InputMaybe<Scalars['Int']['input']>;
  alcoholWarning_LONGEST_LT?: InputMaybe<Scalars['Int']['input']>;
  alcoholWarning_LONGEST_LTE?: InputMaybe<Scalars['Int']['input']>;
  alcoholWarning_LT?: InputMaybe<Scalars['Int']['input']>;
  alcoholWarning_LTE?: InputMaybe<Scalars['Int']['input']>;
  alcoholWarning_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  alcoholWarning_SHORTEST_GT?: InputMaybe<Scalars['Int']['input']>;
  alcoholWarning_SHORTEST_GTE?: InputMaybe<Scalars['Int']['input']>;
  alcoholWarning_SHORTEST_LT?: InputMaybe<Scalars['Int']['input']>;
  alcoholWarning_SHORTEST_LTE?: InputMaybe<Scalars['Int']['input']>;
  dosageForm_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  dosageForm_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  dosageForm_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  dosageForm_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  dosageForm_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  dosageForm_EQUAL?: InputMaybe<Scalars['String']['input']>;
  dosageForm_GT?: InputMaybe<Scalars['Int']['input']>;
  dosageForm_GTE?: InputMaybe<Scalars['Int']['input']>;
  dosageForm_LONGEST_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dosageForm_LONGEST_GT?: InputMaybe<Scalars['Int']['input']>;
  dosageForm_LONGEST_GTE?: InputMaybe<Scalars['Int']['input']>;
  dosageForm_LONGEST_LT?: InputMaybe<Scalars['Int']['input']>;
  dosageForm_LONGEST_LTE?: InputMaybe<Scalars['Int']['input']>;
  dosageForm_LT?: InputMaybe<Scalars['Int']['input']>;
  dosageForm_LTE?: InputMaybe<Scalars['Int']['input']>;
  dosageForm_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dosageForm_SHORTEST_GT?: InputMaybe<Scalars['Int']['input']>;
  dosageForm_SHORTEST_GTE?: InputMaybe<Scalars['Int']['input']>;
  dosageForm_SHORTEST_LT?: InputMaybe<Scalars['Int']['input']>;
  dosageForm_SHORTEST_LTE?: InputMaybe<Scalars['Int']['input']>;
  foodWarning_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  foodWarning_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  foodWarning_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  foodWarning_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  foodWarning_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  foodWarning_EQUAL?: InputMaybe<Scalars['String']['input']>;
  foodWarning_GT?: InputMaybe<Scalars['Int']['input']>;
  foodWarning_GTE?: InputMaybe<Scalars['Int']['input']>;
  foodWarning_LONGEST_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  foodWarning_LONGEST_GT?: InputMaybe<Scalars['Int']['input']>;
  foodWarning_LONGEST_GTE?: InputMaybe<Scalars['Int']['input']>;
  foodWarning_LONGEST_LT?: InputMaybe<Scalars['Int']['input']>;
  foodWarning_LONGEST_LTE?: InputMaybe<Scalars['Int']['input']>;
  foodWarning_LT?: InputMaybe<Scalars['Int']['input']>;
  foodWarning_LTE?: InputMaybe<Scalars['Int']['input']>;
  foodWarning_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  foodWarning_SHORTEST_GT?: InputMaybe<Scalars['Int']['input']>;
  foodWarning_SHORTEST_GTE?: InputMaybe<Scalars['Int']['input']>;
  foodWarning_SHORTEST_LT?: InputMaybe<Scalars['Int']['input']>;
  foodWarning_SHORTEST_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_EQUAL?: InputMaybe<Scalars['String']['input']>;
  name_GT?: InputMaybe<Scalars['Int']['input']>;
  name_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type MedicalStudyStudySubjectRelationship = {
  __typename?: 'MedicalStudyStudySubjectRelationship';
  cursor: Scalars['String']['output'];
  node: Drug;
};

export type MedicalStudyStudySubjectUpdateConnectionInput = {
  node?: InputMaybe<DrugUpdateInput>;
};

export type MedicalStudyStudySubjectUpdateFieldInput = {
  connect?: InputMaybe<MedicalStudyStudySubjectConnectFieldInput>;
  create?: InputMaybe<MedicalStudyStudySubjectCreateFieldInput>;
  delete?: InputMaybe<MedicalStudyStudySubjectDeleteFieldInput>;
  disconnect?: InputMaybe<MedicalStudyStudySubjectDisconnectFieldInput>;
  update?: InputMaybe<MedicalStudyStudySubjectUpdateConnectionInput>;
  where?: InputMaybe<MedicalStudyStudySubjectConnectionWhere>;
};

export type MedicalStudyStudyUpdateConnectionInput = {
  node?: InputMaybe<MedicalStudyUpdateInput>;
};

export type MedicalStudyStudyUpdateFieldInput = {
  connect?: InputMaybe<Array<MedicalStudyStudyConnectFieldInput>>;
  create?: InputMaybe<Array<MedicalStudyStudyCreateFieldInput>>;
  delete?: InputMaybe<Array<MedicalStudyStudyDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MedicalStudyStudyDisconnectFieldInput>>;
  update?: InputMaybe<MedicalStudyStudyUpdateConnectionInput>;
  where?: InputMaybe<MedicalStudyStudyConnectionWhere>;
};

export type MedicalStudyUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MedicalStudyStatus>;
  study?: InputMaybe<Array<MedicalStudyStudyUpdateFieldInput>>;
  studySubject?: InputMaybe<MedicalStudyStudySubjectUpdateFieldInput>;
};

export type MedicalStudyWhere = {
  AND?: InputMaybe<Array<MedicalStudyWhere>>;
  OR?: InputMaybe<Array<MedicalStudyWhere>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_NOT?: InputMaybe<Scalars['String']['input']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MedicalStudyStatus>;
  status_IN?: InputMaybe<Array<InputMaybe<MedicalStudyStatus>>>;
  status_NOT?: InputMaybe<MedicalStudyStatus>;
  status_NOT_IN?: InputMaybe<Array<InputMaybe<MedicalStudyStatus>>>;
  study?: InputMaybe<MedicalStudyWhere>;
  studyAggregate?: InputMaybe<MedicalStudyStudyAggregateInput>;
  studyConnection?: InputMaybe<MedicalStudyStudyConnectionWhere>;
  studyConnection_NOT?: InputMaybe<MedicalStudyStudyConnectionWhere>;
  studySubject?: InputMaybe<DrugWhere>;
  studySubjectAggregate?: InputMaybe<MedicalStudyStudySubjectAggregateInput>;
  studySubjectConnection?: InputMaybe<MedicalStudyStudySubjectConnectionWhere>;
  studySubjectConnection_NOT?: InputMaybe<MedicalStudyStudySubjectConnectionWhere>;
  studySubject_NOT?: InputMaybe<DrugWhere>;
  study_NOT?: InputMaybe<MedicalStudyWhere>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDrugs: CreateDrugsMutationResponse;
  createMedicalStudies: CreateMedicalStudiesMutationResponse;
  deleteDrugs: DeleteInfo;
  deleteMedicalStudies: DeleteInfo;
  updateDrugs: UpdateDrugsMutationResponse;
  updateMedicalStudies: UpdateMedicalStudiesMutationResponse;
};


export type MutationCreateDrugsArgs = {
  input: Array<DrugCreateInput>;
};


export type MutationCreateMedicalStudiesArgs = {
  input: Array<MedicalStudyCreateInput>;
};


export type MutationDeleteDrugsArgs = {
  delete?: InputMaybe<DrugDeleteInput>;
  where?: InputMaybe<DrugWhere>;
};


export type MutationDeleteMedicalStudiesArgs = {
  delete?: InputMaybe<MedicalStudyDeleteInput>;
  where?: InputMaybe<MedicalStudyWhere>;
};


export type MutationUpdateDrugsArgs = {
  connect?: InputMaybe<DrugConnectInput>;
  create?: InputMaybe<DrugRelationInput>;
  delete?: InputMaybe<DrugDeleteInput>;
  disconnect?: InputMaybe<DrugDisconnectInput>;
  update?: InputMaybe<DrugUpdateInput>;
  where?: InputMaybe<DrugWhere>;
};


export type MutationUpdateMedicalStudiesArgs = {
  connect?: InputMaybe<MedicalStudyConnectInput>;
  create?: InputMaybe<MedicalStudyRelationInput>;
  delete?: InputMaybe<MedicalStudyDeleteInput>;
  disconnect?: InputMaybe<MedicalStudyDisconnectInput>;
  update?: InputMaybe<MedicalStudyUpdateInput>;
  where?: InputMaybe<MedicalStudyWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  drugs: Array<Drug>;
  drugsAggregate: DrugAggregateSelection;
  drugsCount: Scalars['Int']['output'];
  dummy?: Maybe<Array<Drug>>;
  medicalStudies: Array<MedicalStudy>;
  medicalStudiesAggregate: MedicalStudyAggregateSelection;
  medicalStudiesCount: Scalars['Int']['output'];
};


export type QueryDrugsArgs = {
  options?: InputMaybe<DrugOptions>;
  where?: InputMaybe<DrugWhere>;
};


export type QueryDrugsAggregateArgs = {
  where?: InputMaybe<DrugWhere>;
};


export type QueryDrugsCountArgs = {
  where?: InputMaybe<DrugWhere>;
};


export type QueryMedicalStudiesArgs = {
  options?: InputMaybe<MedicalStudyOptions>;
  where?: InputMaybe<MedicalStudyWhere>;
};


export type QueryMedicalStudiesAggregateArgs = {
  where?: InputMaybe<MedicalStudyWhere>;
};


export type QueryMedicalStudiesCountArgs = {
  where?: InputMaybe<MedicalStudyWhere>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelection = {
  __typename?: 'StringAggregateSelection';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

export type UpdateDrugsMutationResponse = {
  __typename?: 'UpdateDrugsMutationResponse';
  drugs: Array<Drug>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateMedicalStudiesMutationResponse = {
  __typename?: 'UpdateMedicalStudiesMutationResponse';
  info: UpdateInfo;
  medicalStudies: Array<MedicalStudy>;
};

export type GetAllDrugsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDrugsQueryQuery = { __typename?: 'Query', drugs: Array<{ __typename?: 'Drug', alcoholWarning?: string | null, dosageForm?: string | null, foodWarning?: string | null, name?: string | null }> };


export const GetAllDrugsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllDrugsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"drugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alcoholWarning"}},{"kind":"Field","name":{"kind":"Name","value":"dosageForm"}},{"kind":"Field","name":{"kind":"Name","value":"foodWarning"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllDrugsQueryQuery, GetAllDrugsQueryQueryVariables>;