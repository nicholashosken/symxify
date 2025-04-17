import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { NonAcctNameFmHistorySingleSelectableFields } from "./nonAcctNameFmHistorySingleSelectableFields";
import { NonAcctNameFmHistorySearchFilter } from "./nonAcctNameFmHistorySearchFilter";
import { VersionType } from "./versionType";
export interface NonAcctNameFmHistorySearchPagedSelectFieldsRequest {
    nonAcctNameNonAcctNameNum: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: NonAcctNameFmHistorySingleSelectableFields;
    searchFilter: NonAcctNameFmHistorySearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
