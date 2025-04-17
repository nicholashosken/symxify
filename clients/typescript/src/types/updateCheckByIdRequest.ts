import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CheckFields_2 } from "./checkFields_2";
import { VersionType } from "./versionType";

export interface UpdateCheckByIdRequest {
    checkGlobalSequenceDate: string | null;
    checkGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    checkFields: CheckFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}