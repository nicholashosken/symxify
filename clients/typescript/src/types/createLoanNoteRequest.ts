import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanNoteFields_2 } from "./loanNoteFields_2";
import { VersionType } from "./versionType";

export interface CreateLoanNoteRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanNoteFields: LoanNoteFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}