import { LoanAppWorkFlow } from "./loanAppWorkFlow";
import { VersionType } from "./versionType";

export interface LoanAppWorkFlowSelectFieldsResponse {
    loanAppWorkFlow: LoanAppWorkFlow;
    version1: VersionType;
    messageId: string;
}