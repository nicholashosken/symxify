import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { UserTrackingSingleSelectableFields } from "./userTrackingSingleSelectableFields";
import { VersionType } from "./versionType";
export interface UserTrackingPagedListSelectFieldsRequest {
    userNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: UserTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
