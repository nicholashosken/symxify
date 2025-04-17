import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { UserFields_2 } from "./userFields_2";
import { VersionType } from "./versionType";

export interface UpdateUserByIdRequest {
    userNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    userFields: UserFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}