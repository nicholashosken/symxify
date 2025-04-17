import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanCheckOrderFields_2 } from "./loanCheckOrderFields_2";
import { VersionType } from "./versionType";
export interface CreateLoanCheckOrderRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanCheckOrderFields: LoanCheckOrderFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
