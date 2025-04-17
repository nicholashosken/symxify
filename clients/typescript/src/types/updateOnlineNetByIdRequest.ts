import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineNetFields_2 } from "./onlineNetFields_2";
import { VersionType } from "./versionType";

export interface UpdateOnlineNetByIdRequest {
    onlineNetNetworkMessageFormat: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    onlineNetFields: OnlineNetFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}