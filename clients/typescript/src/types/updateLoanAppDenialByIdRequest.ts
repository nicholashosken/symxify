import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppDenialFields_2 } from "./loanAppDenialFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanAppDenialByIdRequest {
    loanAppDenialDenialNotice: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppDenialFields: LoanAppDenialFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}