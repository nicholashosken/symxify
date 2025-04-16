import { LoanAppWorkFlowEvent_2 } from "./loanAppWorkFlowEvent_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppWorkFlow_2 {
    applicationTypeValue: number;
    applicationTypeValueSpecified: boolean;
    applicationType: number | null;
    event: LoanAppWorkFlowEvent_2[];
    eventSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
