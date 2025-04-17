import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppSingleSelectableFields } from "./loanAppSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
