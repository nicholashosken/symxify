import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { UserTrackingTypeSingleSelectableFields } from "./userTrackingTypeSingleSelectableFields";
import { UserTrackingTypeSearchFilter } from "./userTrackingTypeSearchFilter";
import { VersionType } from "./versionType";
export interface UserTrackingTypeSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: UserTrackingTypeSingleSelectableFields;
    searchFilter: UserTrackingTypeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
