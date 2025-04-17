import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanBankruptcyFields_2 } from "./loanBankruptcyFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanBankruptcyByIdRequest {
    accountNumber: string;
    loanId: string;
    loanBankruptcyId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanBankruptcyFields: LoanBankruptcyFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}