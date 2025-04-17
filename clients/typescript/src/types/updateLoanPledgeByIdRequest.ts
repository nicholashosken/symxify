import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanPledgeFields_2 } from "./loanPledgeFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanPledgeByIdRequest {
    accountNumber: string;
    loanId: string;
    loanPledgeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanPledgeFields: LoanPledgeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}