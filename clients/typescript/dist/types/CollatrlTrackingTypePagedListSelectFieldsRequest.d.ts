import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CollatrlTrackingTypeSingleSelectableFields } from "./collatrlTrackingTypeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CollatrlTrackingTypePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CollatrlTrackingTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
