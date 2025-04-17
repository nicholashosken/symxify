import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ActivitySingleSelectableFields } from "./activitySingleSelectableFields";
import { VersionType } from "./versionType";
export interface ActivityPagedListSelectFieldsRequest {
    userNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ActivitySingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
