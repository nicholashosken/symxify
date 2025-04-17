import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanLnSegmentFields_2 } from "./loanLnSegmentFields_2";
import { VersionType } from "./versionType";
export interface UpdateLoanLnSegmentByIdRequest {
    accountNumber: string;
    loanId: string;
    loanLnSegmentId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanLnSegmentFields: LoanLnSegmentFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
