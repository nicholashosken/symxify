import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PartTrackingTypeSingleSelectableFields } from "./partTrackingTypeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface PartTrackingTypePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PartTrackingTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}