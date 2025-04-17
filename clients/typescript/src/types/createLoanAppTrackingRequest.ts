import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppTrackingFields_2 } from "./loanAppTrackingFields_2";
import { VersionType } from "./versionType";

export interface CreateLoanAppTrackingRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppTrackingFields: LoanAppTrackingFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}