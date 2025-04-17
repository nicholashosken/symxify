import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanRateChangeFields_2 } from "./loanRateChangeFields_2";
import { VersionType } from "./versionType";
export interface UpdateLoanRateChangeByIdRequest {
    accountNumber: string;
    loanId: string;
    loanRateChangeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanRateChangeFields: LoanRateChangeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
