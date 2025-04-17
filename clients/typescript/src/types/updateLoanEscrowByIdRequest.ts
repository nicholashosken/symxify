import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanEscrowFields_2 } from "./loanEscrowFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanEscrowByIdRequest {
    accountNumber: string;
    loanId: string;
    loanEscrowLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanEscrowFields: LoanEscrowFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}