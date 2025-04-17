import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppVerFormSingleSelectableFields } from "./loanAppVerFormSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppVerFormSelectFieldsRequest {
    loanAppVerFormVerForm: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppVerFormSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}