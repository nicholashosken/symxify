import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlAccountFmHistorySingleSelectableFields } from "./glAccountFmHistorySingleSelectableFields";
import { GlAccountFmHistorySearchFilter } from "./glAccountFmHistorySearchFilter";
import { VersionType } from "./versionType";
export interface GlAccountFmHistorySearchPagedSelectFieldsRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlAccountFmHistorySingleSelectableFields;
    searchFilter: GlAccountFmHistorySearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
