import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanTransferFields_2 } from "./loanTransferFields_2";
import { VersionType } from "./versionType";
export interface UpdateLoanTransferByIdRequest {
    accountNumber: string;
    loanId: string;
    loanTransferLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanTransferFields: LoanTransferFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
