import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppEscrowFields_2 } from "./loanAppEscrowFields_2";
import { VersionType } from "./versionType";

export interface CreateLoanAppEscrowRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppEscrowFields: LoanAppEscrowFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}