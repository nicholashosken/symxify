import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SecFieldFields_2 } from "./secFieldFields_2";
import { VersionType } from "./versionType";
export interface UpdateSecFieldByIdRequest {
    secFieldRecordSelection: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    secFieldFields: SecFieldFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
