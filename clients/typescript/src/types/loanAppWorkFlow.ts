import { LoanAppWorkFlowEvent } from "./loanAppWorkFlowEvent";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppWorkFlow {
    applicationTypeValue: number;
    applicationTypeValueSpecified: boolean;
    applicationType: number | null;
    event: LoanAppWorkFlowEvent[];
    eventSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}