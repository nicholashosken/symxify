import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IrsDistributionFields_2 } from "./irsDistributionFields_2";
import { VersionType } from "./versionType";

export interface CreateIrsDistributionRequest {
    accountNumber: string;
    irsLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    irsDistributionFields: IrsDistributionFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}