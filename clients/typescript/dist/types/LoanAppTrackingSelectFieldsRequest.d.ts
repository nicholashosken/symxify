import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppTrackingSingleSelectableFields } from "./loanAppTrackingSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppTrackingSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppTrackingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
