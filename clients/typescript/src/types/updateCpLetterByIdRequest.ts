import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CpLetterFields_2 } from "./cpLetterFields_2";
import { VersionType } from "./versionType";

export interface UpdateCpLetterByIdRequest {
    cpLetterLetterCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    cpLetterFields: CpLetterFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}