import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppPersonSingleSelectableFields } from "./loanAppPersonSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppPersonSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppPersonLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppPersonSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}