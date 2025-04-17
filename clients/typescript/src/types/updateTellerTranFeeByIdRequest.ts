import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TellerTranFeeFields_2 } from "./tellerTranFeeFields_2";
import { VersionType } from "./versionType";

export interface UpdateTellerTranFeeByIdRequest {
    tellerTranFeeFeeCode: number | null;
    tellerTranFeeTypeCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    tellerTranFeeFields: TellerTranFeeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}