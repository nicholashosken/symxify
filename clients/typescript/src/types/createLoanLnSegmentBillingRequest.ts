import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanLnSegmentBillingFields_2 } from "./loanLnSegmentBillingFields_2";
import { VersionType } from "./versionType";

export interface CreateLoanLnSegmentBillingRequest {
    accountNumber: string;
    loanId: string;
    loanLnSegmentId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanLnSegmentBillingFields: LoanLnSegmentBillingFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}