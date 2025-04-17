import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TellerTranValidateFields_2 } from "./tellerTranValidateFields_2";
import { VersionType } from "./versionType";
export interface UpdateTellerTranValidateByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    tellerTranValidateFields: TellerTranValidateFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
