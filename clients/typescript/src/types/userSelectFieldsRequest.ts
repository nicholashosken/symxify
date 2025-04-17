import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { UserSingleSelectableFields } from "./userSingleSelectableFields";
import { VersionType } from "./versionType";

export interface UserSelectFieldsRequest {
    userNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: UserSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}