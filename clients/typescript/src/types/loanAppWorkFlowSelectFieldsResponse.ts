import { LoanAppWorkFlow } from "./loanAppWorkFlow";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppWorkFlowSelectFieldsResponse {
    loanAppWorkFlow: LoanAppWorkFlow;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}