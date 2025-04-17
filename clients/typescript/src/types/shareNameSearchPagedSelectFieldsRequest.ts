import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareNameSingleSelectableFields } from "./shareNameSingleSelectableFields";
import { ShareNameSearchFilter } from "./shareNameSearchFilter";
import { VersionType } from "./versionType";

export interface ShareNameSearchPagedSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareNameSingleSelectableFields;
    searchFilter: ShareNameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}