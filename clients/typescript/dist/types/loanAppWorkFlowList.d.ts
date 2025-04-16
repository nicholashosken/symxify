import { LoanAppWorkFlow } from "./loanAppWorkFlow";
export interface LoanAppWorkFlowList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppWorkFlow: LoanAppWorkFlow[];
    loanAppWorkFlowSpecified: boolean;
}
