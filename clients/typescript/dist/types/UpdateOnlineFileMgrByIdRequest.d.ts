import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineFileMgrFields_2 } from "./onlineFileMgrFields_2";
import { VersionType } from "./versionType";
export interface UpdateOnlineFileMgrByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    onlineFileMgrFields: OnlineFileMgrFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
