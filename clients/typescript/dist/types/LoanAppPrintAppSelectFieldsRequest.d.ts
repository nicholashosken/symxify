import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppPrintAppSingleSelectableFields } from "./loanAppPrintAppSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppPrintAppSelectFieldsRequest {
    loanAppPrintAppApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppPrintAppSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
