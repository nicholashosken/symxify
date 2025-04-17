import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IrsContriLimitFields_2 } from "./irsContriLimitFields_2";
import { VersionType } from "./versionType";
export interface UpdateIrsContriLimitByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    irsContriLimitFields: IrsContriLimitFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
