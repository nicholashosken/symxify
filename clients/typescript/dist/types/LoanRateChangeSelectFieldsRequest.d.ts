import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanRateChangeSingleSelectableFields } from "./loanRateChangeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanRateChangeSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanRateChangeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanRateChangeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
