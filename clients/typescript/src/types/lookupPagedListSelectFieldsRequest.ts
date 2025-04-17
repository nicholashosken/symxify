import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LookupSingleSelectableFields } from "./lookupSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LookupPagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LookupSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}