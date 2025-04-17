import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppDefaultSingleSelectableFields } from "./loanAppDefaultSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppDefaultSelectFieldsRequest {
    loanAppDefaultApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppDefaultSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
