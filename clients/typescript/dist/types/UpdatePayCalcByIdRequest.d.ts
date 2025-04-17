import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PayCalcFields_2 } from "./payCalcFields_2";
import { VersionType } from "./versionType";
export interface UpdatePayCalcByIdRequest {
    payCalcPaymentCalculationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    payCalcFields: PayCalcFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
