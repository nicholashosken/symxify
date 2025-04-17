import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanFields_2 } from "./loanFields_2";
import { VersionType } from "./versionType";
export interface CreateLoanRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanFields: LoanFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
