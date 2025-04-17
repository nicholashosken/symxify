import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanNoteFields_2 } from "./loanNoteFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanNoteByIdRequest {
    accountNumber: string;
    loanId: string;
    loanNoteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanNoteFields: LoanNoteFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}