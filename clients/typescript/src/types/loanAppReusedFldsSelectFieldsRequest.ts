import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppReusedFldsSingleSelectableFields } from "./loanAppReusedFldsSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppReusedFldsSelectFieldsRequest {
    loanAppReusedFldsApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppReusedFldsSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}