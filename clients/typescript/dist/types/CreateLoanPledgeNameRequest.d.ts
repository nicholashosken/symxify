import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanPledgeNameFields_2 } from "./loanPledgeNameFields_2";
import { VersionType } from "./versionType";
export interface CreateLoanPledgeNameRequest {
    accountNumber: string;
    loanId: string;
    loanPledgeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanPledgeNameFields: LoanPledgeNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
