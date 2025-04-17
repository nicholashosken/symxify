import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineMainFields_2 } from "./onlineMainFields_2";
import { VersionType } from "./versionType";

export interface UpdateOnlineMainByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    onlineMainFields: OnlineMainFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}