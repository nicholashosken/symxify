import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppWorkFlowFields_2 } from "./loanAppWorkFlowFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateLoanAppWorkFlowByIdRequest {
    loanAppWorkFlowApplicationTypeValue: number;
    loanAppWorkFlowApplicationTypeValueSpecified: boolean;
    loanAppWorkFlowApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppWorkFlowFields: LoanAppWorkFlowFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
