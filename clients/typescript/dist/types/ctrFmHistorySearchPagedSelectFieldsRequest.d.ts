import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CtrFmHistorySingleSelectableFields } from "./ctrFmHistorySingleSelectableFields";
import { CtrFmHistorySearchFilter } from "./ctrFmHistorySearchFilter";
import { VersionType } from "./versionType";
export interface CtrFmHistorySearchPagedSelectFieldsRequest {
    ctrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CtrFmHistorySingleSelectableFields;
    searchFilter: CtrFmHistorySearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
