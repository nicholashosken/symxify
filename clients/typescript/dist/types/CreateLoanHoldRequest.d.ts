import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanHoldFields_2 } from "./loanHoldFields_2";
import { VersionType } from "./versionType";
export interface CreateLoanHoldRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanHoldFields: LoanHoldFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
