import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppFieldNameSingleSelectableFields } from "./loanAppFieldNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppFieldNameSelectFieldsRequest {
    loanAppFieldNameField: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppFieldNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}