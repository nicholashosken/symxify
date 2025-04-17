import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppViewAppSingleSelectableFields } from "./loanAppViewAppSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppViewAppSelectFieldsRequest {
    loanAppViewAppApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppViewAppSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}