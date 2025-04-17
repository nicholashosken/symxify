import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppWorkFlowFields_2 } from "./loanAppWorkFlowFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanAppWorkFlowByIdRequest {
    loanAppWorkFlowApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppWorkFlowFields: LoanAppWorkFlowFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}