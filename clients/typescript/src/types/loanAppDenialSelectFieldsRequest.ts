import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppDenialSingleSelectableFields } from "./loanAppDenialSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppDenialSelectFieldsRequest {
    loanAppDenialDenialNotice: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppDenialSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}