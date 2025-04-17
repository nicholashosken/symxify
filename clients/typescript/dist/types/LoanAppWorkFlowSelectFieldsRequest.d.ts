import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppWorkFlowSingleSelectableFields } from "./loanAppWorkFlowSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppWorkFlowSelectFieldsRequest {
    loanAppWorkFlowApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppWorkFlowSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
