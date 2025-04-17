import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanBankruptcyPrepetitionBalFields_2 } from "./loanBankruptcyPrepetitionBalFields_2";
import { VersionType } from "./versionType";
export interface UpdateLoanBankruptcyPrepetitionBalByIdRequest {
    accountNumber: string;
    loanId: string;
    loanBankruptcyId: string;
    loanBankruptcyPrepetitionBalId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanBankruptcyPrepetitionBalFields: LoanBankruptcyPrepetitionBalFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
