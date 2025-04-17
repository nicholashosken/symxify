import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanDefaultFields_2 } from "./loanDefaultFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanDefaultByIdRequest {
    loanDefaultLoanType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanDefaultFields: LoanDefaultFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}