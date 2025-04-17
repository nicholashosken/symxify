import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineCardFields_2 } from "./onlineCardFields_2";
import { VersionType } from "./versionType";

export interface UpdateOnlineCardByIdRequest {
    onlineCardCardType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    onlineCardFields: OnlineCardFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}