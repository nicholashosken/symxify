import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NonRegCcFields_2 } from "./nonRegCcFields_2";
import { VersionType } from "./versionType";

export interface UpdateNonRegCcByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    nonRegCcFields: NonRegCcFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}