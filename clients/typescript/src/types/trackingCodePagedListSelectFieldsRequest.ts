import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { TrackingCodeSingleSelectableFields } from "./trackingCodeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface TrackingCodePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: TrackingCodeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}