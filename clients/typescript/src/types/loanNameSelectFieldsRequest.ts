import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanNameSingleSelectableFields } from "./loanNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanNameSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}