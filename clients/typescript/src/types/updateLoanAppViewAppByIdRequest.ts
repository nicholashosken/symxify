import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppViewAppFields_2 } from "./loanAppViewAppFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanAppViewAppByIdRequest {
    loanAppViewAppApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppViewAppFields: LoanAppViewAppFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}