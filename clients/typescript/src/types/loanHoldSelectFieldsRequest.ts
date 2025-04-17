import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanHoldSingleSelectableFields } from "./loanHoldSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanHoldSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanHoldLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanHoldSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}