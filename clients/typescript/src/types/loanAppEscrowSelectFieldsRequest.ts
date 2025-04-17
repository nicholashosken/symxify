import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppEscrowSingleSelectableFields } from "./loanAppEscrowSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppEscrowSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppEscrowLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppEscrowSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}