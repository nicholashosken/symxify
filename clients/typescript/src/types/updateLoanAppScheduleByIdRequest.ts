import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppScheduleFields_2 } from "./loanAppScheduleFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanAppScheduleByIdRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppScheduleId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppScheduleFields: LoanAppScheduleFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}