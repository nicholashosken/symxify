import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanNoteSingleSelectableFields } from "./loanNoteSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanNoteSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanNoteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
