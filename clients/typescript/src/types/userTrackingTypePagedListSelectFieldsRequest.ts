import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { UserTrackingTypeSingleSelectableFields } from "./userTrackingTypeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface UserTrackingTypePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: UserTrackingTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}