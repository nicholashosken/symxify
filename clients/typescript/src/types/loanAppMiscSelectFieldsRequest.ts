import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppMiscSingleSelectableFields } from "./loanAppMiscSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppMiscSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppMiscSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}