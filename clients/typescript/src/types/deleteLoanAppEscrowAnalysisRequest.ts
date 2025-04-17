import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VersionType } from "./versionType";

export interface DeleteLoanAppEscrowAnalysisRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppEscrowAnalysisLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}