import { LoanAppWorkFlow } from "./loanAppWorkFlow";
export interface LoanAppWorkFlowList {
    hasReachedMaximumListSize: boolean | null;
    loanAppWorkFlow: LoanAppWorkFlow[];
}
