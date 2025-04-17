import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IrsNameFields_2 } from "./irsNameFields_2";
import { VersionType } from "./versionType";

export interface UpdateIrsNameByIdRequest {
    accountNumber: string;
    irsLocator: number | null;
    irsNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    irsNameFields: IrsNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}