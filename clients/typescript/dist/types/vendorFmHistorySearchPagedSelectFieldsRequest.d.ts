import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { VendorFmHistorySingleSelectableFields } from "./vendorFmHistorySingleSelectableFields";
import { VendorFmHistorySearchFilter } from "./vendorFmHistorySearchFilter";
import { VersionType } from "./versionType";
export interface VendorFmHistorySearchPagedSelectFieldsRequest {
    vendorNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: VendorFmHistorySingleSelectableFields;
    searchFilter: VendorFmHistorySearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
