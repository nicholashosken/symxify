import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppEscrowAnalysisFields_2 } from "./loanAppEscrowAnalysisFields_2";
import { VersionType } from "./versionType";

export interface CreateLoanAppEscrowAnalysisRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppEscrowAnalysisFields: LoanAppEscrowAnalysisFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}