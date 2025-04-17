import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanEscrowAnalysisFields_2 } from "./loanEscrowAnalysisFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanEscrowAnalysisByIdRequest {
    accountNumber: string;
    loanId: string;
    loanEscrowAnalysisLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanEscrowAnalysisFields: LoanEscrowAnalysisFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}