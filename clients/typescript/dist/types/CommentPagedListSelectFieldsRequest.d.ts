import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CommentSingleSelectableFields } from "./commentSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CommentPagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CommentSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
