import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppDefaultFields_2 } from "./loanAppDefaultFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanAppDefaultByIdRequest {
    loanAppDefaultApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppDefaultFields: LoanAppDefaultFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}