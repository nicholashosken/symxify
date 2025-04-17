import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppFieldNameFields_2 } from "./loanAppFieldNameFields_2";
import { VersionType } from "./versionType";
export interface UpdateLoanAppFieldNameByIdRequest {
    loanAppFieldNameField: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppFieldNameFields: LoanAppFieldNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
