import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanSingleSelectableFields } from "./loanSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}