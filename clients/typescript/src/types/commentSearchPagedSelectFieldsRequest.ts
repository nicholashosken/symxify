import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CommentSingleSelectableFields } from "./commentSingleSelectableFields";
import { CommentSearchFilter } from "./commentSearchFilter";
import { VersionType } from "./versionType";

export interface CommentSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CommentSingleSelectableFields;
    searchFilter: CommentSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}