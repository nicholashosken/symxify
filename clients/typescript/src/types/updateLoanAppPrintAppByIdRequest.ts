import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppPrintAppFields_2 } from "./loanAppPrintAppFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanAppPrintAppByIdRequest {
    loanAppPrintAppApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppPrintAppFields: LoanAppPrintAppFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}