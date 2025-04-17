import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VersionType } from "./versionType";
export interface DeleteLoanAppPersonRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppPersonLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
