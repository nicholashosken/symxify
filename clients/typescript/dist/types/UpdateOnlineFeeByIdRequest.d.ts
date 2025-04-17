import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineFeeFields_2 } from "./onlineFeeFields_2";
import { VersionType } from "./versionType";
export interface UpdateOnlineFeeByIdRequest {
    onlineFeeRuleOrdinal: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    onlineFeeFields: OnlineFeeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
