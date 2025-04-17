import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { TrackingCodeSingleSelectableFields } from "./trackingCodeSingleSelectableFields";
import { TrackingCodeSearchFilter } from "./trackingCodeSearchFilter";
import { VersionType } from "./versionType";

export interface TrackingCodeSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: TrackingCodeSingleSelectableFields;
    searchFilter: TrackingCodeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}