import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanCheckOrderSingleSelectableFields } from "./loanCheckOrderSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanCheckOrderSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanCheckOrderLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanCheckOrderSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
