import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppReusedFldsFields_2 } from "./loanAppReusedFldsFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanAppReusedFldsByIdRequest {
    loanAppReusedFldsApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppReusedFldsFields: LoanAppReusedFldsFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}