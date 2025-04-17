import { LoanAppWorkFlowEvent_2 } from "./loanAppWorkFlowEvent_2";
import { VersionType } from "./versionType";
export interface LoanAppWorkFlow_2 {
    applicationType: number | null;
    event: LoanAppWorkFlowEvent_2[];
    version1: VersionType;
}
