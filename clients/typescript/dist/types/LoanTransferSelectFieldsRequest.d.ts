import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanTransferSingleSelectableFields } from "./loanTransferSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanTransferSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanTransferLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanTransferSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
