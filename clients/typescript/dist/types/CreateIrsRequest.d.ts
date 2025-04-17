import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IrsFields_2 } from "./irsFields_2";
import { VersionType } from "./versionType";
export interface CreateIrsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    irsFields: IrsFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
