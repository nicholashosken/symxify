import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { VendorFmHistorySingleSelectableFields } from "./vendorFmHistorySingleSelectableFields";
import { VersionType } from "./versionType";

export interface VendorFmHistoryPagedListSelectFieldsRequest {
    vendorNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: VendorFmHistorySingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}