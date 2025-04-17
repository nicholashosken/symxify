import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CommentSingleSelectableFields } from "./commentSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CommentSelectFieldsRequest {
    accountNumber: string;
    commentLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CommentSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
