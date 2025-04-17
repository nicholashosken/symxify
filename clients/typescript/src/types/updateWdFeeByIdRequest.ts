import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WdFeeFields_2 } from "./wdFeeFields_2";
import { VersionType } from "./versionType";

export interface UpdateWdFeeByIdRequest {
    wdFeeWithdrawalFeeType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wdFeeFields: WdFeeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}