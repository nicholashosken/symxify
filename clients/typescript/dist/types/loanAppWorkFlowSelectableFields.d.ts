import { LoanAppWorkFlowFields } from "./loanAppWorkFlowFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppWorkFlowSelectableFields {
    includeAllLoanAppWorkFlowFieldsValue: boolean;
    includeAllLoanAppWorkFlowFieldsValueSpecified: boolean;
    includeAllLoanAppWorkFlowFields: boolean | null;
    loanAppWorkFlowFields: LoanAppWorkFlowFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
