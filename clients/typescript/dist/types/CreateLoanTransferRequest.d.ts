import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanTransferFields_2 } from "./loanTransferFields_2";
import { VersionType } from "./versionType";
export interface CreateLoanTransferRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanTransferFields: LoanTransferFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
