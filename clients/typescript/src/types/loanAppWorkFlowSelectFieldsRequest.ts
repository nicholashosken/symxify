import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppWorkFlowSingleSelectableFields } from "./loanAppWorkFlowSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppWorkFlowSelectFieldsRequest {
    loanAppWorkFlowApplicationTypeValue: number;
    loanAppWorkFlowApplicationTypeValueSpecified: boolean;
    loanAppWorkFlowApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppWorkFlowSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}