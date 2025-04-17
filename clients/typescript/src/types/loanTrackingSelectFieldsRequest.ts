import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanTrackingSingleSelectableFields } from "./loanTrackingSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanTrackingSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanTrackingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}