import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppTrackingFields_2 } from "./loanAppTrackingFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanAppTrackingByIdRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppTrackingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppTrackingFields: LoanAppTrackingFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}