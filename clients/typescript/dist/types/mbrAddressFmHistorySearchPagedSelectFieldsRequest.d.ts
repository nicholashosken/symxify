import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { MbrAddressFmHistorySingleSelectableFields } from "./mbrAddressFmHistorySingleSelectableFields";
import { MbrAddressFmHistorySearchFilter } from "./mbrAddressFmHistorySearchFilter";
import { VersionType } from "./versionType";
export interface MbrAddressFmHistorySearchPagedSelectFieldsRequest {
    mbrAddressMbrAddrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: MbrAddressFmHistorySingleSelectableFields;
    searchFilter: MbrAddressFmHistorySearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
