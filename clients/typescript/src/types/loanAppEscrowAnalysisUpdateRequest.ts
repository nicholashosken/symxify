import { LoanAppEscrowAnalysisFields_2 } from "./loanAppEscrowAnalysisFields_2";

export interface LoanAppEscrowAnalysisUpdateRequest {
    loanAppEscrowAnalysisLocatorValue: number;
    loanAppEscrowAnalysisLocatorValueSpecified: boolean;
    loanAppEscrowAnalysisLocator: number | null;
    loanAppEscrowAnalysisFields: LoanAppEscrowAnalysisFields_2;
}