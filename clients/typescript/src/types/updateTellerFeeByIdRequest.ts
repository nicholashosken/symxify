import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TellerFeeFields_2 } from "./tellerFeeFields_2";
import { VersionType } from "./versionType";

export interface UpdateTellerFeeByIdRequest {
    tellerFeeTellerTransactionFeeType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    tellerFeeFields: TellerFeeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}