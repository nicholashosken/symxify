import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppPledgeFields_2 } from "./loanAppPledgeFields_2";
import { VersionType } from "./versionType";

export interface CreateLoanAppPledgeRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppPledgeFields: LoanAppPledgeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}