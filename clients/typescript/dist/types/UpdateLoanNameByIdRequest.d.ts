import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanNameFields_2 } from "./loanNameFields_2";
import { VersionType } from "./versionType";
export interface UpdateLoanNameByIdRequest {
    accountNumber: string;
    loanId: string;
    loanNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanNameFields: LoanNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
