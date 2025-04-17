import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanEscrowSingleSelectableFields } from "./loanEscrowSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanEscrowSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanEscrowLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanEscrowSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
