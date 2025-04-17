import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppLnSegmentFields_2 } from "./loanAppLnSegmentFields_2";
import { VersionType } from "./versionType";

export interface CreateLoanAppLnSegmentRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppLnSegmentFields: LoanAppLnSegmentFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}