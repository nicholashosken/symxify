import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { UserTrackingFmSingleSelectableFields } from "./userTrackingFmSingleSelectableFields";
import { VersionType } from "./versionType";
export interface UserTrackingFmSelectFieldsRequest {
    userTrackingFmLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: UserTrackingFmSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
