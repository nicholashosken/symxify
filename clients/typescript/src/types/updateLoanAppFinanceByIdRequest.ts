import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppFinanceFields_2 } from "./loanAppFinanceFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanAppFinanceByIdRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppFinanceLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppFinanceFields: LoanAppFinanceFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}