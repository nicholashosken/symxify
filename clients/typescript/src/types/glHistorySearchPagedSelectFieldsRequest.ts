import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlHistorySingleSelectableFields } from "./glHistorySingleSelectableFields";
import { GlHistorySearchFilter } from "./glHistorySearchFilter";
import { VersionType } from "./versionType";

export interface GlHistorySearchPagedSelectFieldsRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlHistorySingleSelectableFields;
    searchFilter: GlHistorySearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}