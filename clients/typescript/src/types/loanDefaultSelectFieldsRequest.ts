import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanDefaultSingleSelectableFields } from "./loanDefaultSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanDefaultSelectFieldsRequest {
    loanDefaultLoanType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanDefaultSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}