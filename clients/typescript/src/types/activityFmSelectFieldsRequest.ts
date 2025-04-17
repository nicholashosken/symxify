import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ActivityFmSingleSelectableFields } from "./activityFmSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ActivityFmSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ActivityFmSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}