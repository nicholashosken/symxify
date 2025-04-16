import { LoanPledgeFields_2 } from "./loanPledgeFields_2";
export interface LoanPledgeUpdateRequest {
    loanPledgeLocatorValue: number;
    loanPledgeLocatorValueSpecified: boolean;
    loanPledgeLocator: number | null;
    loanPledgeFields: LoanPledgeFields_2;
}
