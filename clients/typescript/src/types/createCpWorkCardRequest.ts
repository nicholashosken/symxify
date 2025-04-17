import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CpWorkCardFields_2 } from "./cpWorkCardFields_2";
import { VersionType } from "./versionType";

export interface CreateCpWorkCardRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    cpWorkCardFields: CpWorkCardFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}