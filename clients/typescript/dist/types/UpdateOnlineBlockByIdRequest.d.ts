import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineBlockFields_2 } from "./onlineBlockFields_2";
import { VersionType } from "./versionType";
export interface UpdateOnlineBlockByIdRequest {
    onlineBlockRuleNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    onlineBlockFields: OnlineBlockFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
