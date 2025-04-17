import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CredRepItemSingleSelectableFields } from "./credRepItemSingleSelectableFields";
import { CredRepItemSearchFilter } from "./credRepItemSearchFilter";
import { VersionType } from "./versionType";
export interface CredRepItemSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credRepLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CredRepItemSingleSelectableFields;
    searchFilter: CredRepItemSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
