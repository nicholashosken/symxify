import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CredRepSingleSelectableFields } from "./credRepSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CredRepPagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CredRepSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}