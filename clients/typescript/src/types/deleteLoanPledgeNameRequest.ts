import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VersionType } from "./versionType";

export interface DeleteLoanPledgeNameRequest {
    accountNumber: string;
    loanId: string;
    loanPledgeLocator: number | null;
    loanPledgeNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}