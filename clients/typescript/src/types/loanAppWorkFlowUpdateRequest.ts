import { LoanAppWorkFlowFields_2 } from "./loanAppWorkFlowFields_2";

export interface LoanAppWorkFlowUpdateRequest {
    loanAppWorkFlowApplicationTypeValue: number;
    loanAppWorkFlowApplicationTypeValueSpecified: boolean;
    loanAppWorkFlowApplicationType: number | null;
    loanAppWorkFlowFields: LoanAppWorkFlowFields_2;
}