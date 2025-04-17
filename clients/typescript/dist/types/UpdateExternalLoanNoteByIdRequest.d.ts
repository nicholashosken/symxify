import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExternalLoanNoteFields_2 } from "./externalLoanNoteFields_2";
import { VersionType } from "./versionType";
export interface UpdateExternalLoanNoteByIdRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    externalLoanNoteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    externalLoanNoteFields: ExternalLoanNoteFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
