import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExternalLoanNoteSingleSelectableFields } from "./externalLoanNoteSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ExternalLoanNoteSelectFieldsRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    externalLoanNoteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ExternalLoanNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
