import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanLnSegmentBillingFields_2 } from "./loanLnSegmentBillingFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanLnSegmentBillingByIdRequest {
    accountNumber: string;
    loanId: string;
    loanLnSegmentId: string;
    loanLnSegmentBillingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanLnSegmentBillingFields: LoanLnSegmentBillingFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}