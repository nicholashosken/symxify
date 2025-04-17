import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanTrackingFields_2 } from "./loanTrackingFields_2";
import { VersionType } from "./versionType";
export interface UpdateLoanTrackingByIdRequest {
    accountNumber: string;
    loanId: string;
    loanTrackingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanTrackingFields: LoanTrackingFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
