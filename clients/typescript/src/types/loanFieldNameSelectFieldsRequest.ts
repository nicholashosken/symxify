import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanFieldNameSingleSelectableFields } from "./loanFieldNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanFieldNameSelectFieldsRequest {
    loanFieldNameField: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanFieldNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}