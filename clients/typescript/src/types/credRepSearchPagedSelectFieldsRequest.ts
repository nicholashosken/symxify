import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CredRepSingleSelectableFields } from "./credRepSingleSelectableFields";
import { CredRepSearchFilter } from "./credRepSearchFilter";
import { VersionType } from "./versionType";

export interface CredRepSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CredRepSingleSelectableFields;
    searchFilter: CredRepSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}