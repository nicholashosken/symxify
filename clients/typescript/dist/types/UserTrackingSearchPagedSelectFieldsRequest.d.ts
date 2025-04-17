import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { UserTrackingSingleSelectableFields } from "./userTrackingSingleSelectableFields";
import { UserTrackingSearchFilter } from "./userTrackingSearchFilter";
import { VersionType } from "./versionType";
export interface UserTrackingSearchPagedSelectFieldsRequest {
    userNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: UserTrackingSingleSelectableFields;
    searchFilter: UserTrackingSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
