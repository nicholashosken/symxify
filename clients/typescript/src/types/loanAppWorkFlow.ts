import { LoanAppWorkFlowEvent } from "./loanAppWorkFlowEvent";
import { VersionType } from "./versionType";

export interface LoanAppWorkFlow {
    applicationType: number | null;
    event: LoanAppWorkFlowEvent[];
    version1: VersionType;
}