import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppNoteSingleSelectableFields } from "./loanAppNoteSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppNoteSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppNoteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}