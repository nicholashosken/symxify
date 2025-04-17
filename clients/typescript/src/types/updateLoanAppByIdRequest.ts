import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppFields_2 } from "./loanAppFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanAppByIdRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppFields: LoanAppFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}