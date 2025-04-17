import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppCopiedFldsFields_2 } from "./loanAppCopiedFldsFields_2";
import { VersionType } from "./versionType";
export interface UpdateLoanAppCopiedFldsByIdRequest {
    loanAppCopiedFldsApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppCopiedFldsFields: LoanAppCopiedFldsFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
