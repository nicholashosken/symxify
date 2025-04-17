import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CheckFmHistorySingleSelectableFields } from "./checkFmHistorySingleSelectableFields";
import { CheckFmHistorySearchFilter } from "./checkFmHistorySearchFilter";
import { VersionType } from "./versionType";
export interface CheckFmHistorySearchPagedSelectFieldsRequest {
    checkGlobalSequenceDate: string | null;
    checkGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CheckFmHistorySingleSelectableFields;
    searchFilter: CheckFmHistorySearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
