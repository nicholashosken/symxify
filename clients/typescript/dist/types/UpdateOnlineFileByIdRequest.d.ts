import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineFileFields_2 } from "./onlineFileFields_2";
import { VersionType } from "./versionType";
export interface UpdateOnlineFileByIdRequest {
    onlineFileFileRecord: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    onlineFileFields: OnlineFileFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
