import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { UserTrackingSingleSelectableFields } from "./userTrackingSingleSelectableFields";
import { VersionType } from "./versionType";

export interface UserTrackingSelectFieldsRequest {
    userNumber: number | null;
    userTrackingLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: UserTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}