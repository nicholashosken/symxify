import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IrsFields_2 } from "./irsFields_2";
import { VersionType } from "./versionType";

export interface UpdateIrsByIdRequest {
    accountNumber: string;
    irsLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    irsFields: IrsFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}