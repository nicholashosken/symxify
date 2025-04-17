import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireFmHistorySingleSelectableFields } from "./wireFmHistorySingleSelectableFields";
import { WireFmHistorySearchFilter } from "./wireFmHistorySearchFilter";
import { VersionType } from "./versionType";
export interface WireFmHistorySearchPagedSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireFmHistorySingleSelectableFields;
    searchFilter: WireFmHistorySearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
