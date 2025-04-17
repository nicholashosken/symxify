import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppPersonFields_2 } from "./loanAppPersonFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanAppPersonByIdRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppPersonLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppPersonFields: LoanAppPersonFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}