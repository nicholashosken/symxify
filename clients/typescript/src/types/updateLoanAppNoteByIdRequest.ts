import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppNoteFields_2 } from "./loanAppNoteFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanAppNoteByIdRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppNoteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppNoteFields: LoanAppNoteFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}