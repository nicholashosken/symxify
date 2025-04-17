import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineOutletFields_2 } from "./onlineOutletFields_2";
import { VersionType } from "./versionType";

export interface UpdateOnlineOutletByIdRequest {
    onlineOutletBranchNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    onlineOutletFields: OnlineOutletFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}