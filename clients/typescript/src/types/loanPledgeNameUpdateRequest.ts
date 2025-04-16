import { LoanPledgeNameFields_2 } from "./loanPledgeNameFields_2";

export interface LoanPledgeNameUpdateRequest {
    loanPledgeNameLocatorValue: number;
    loanPledgeNameLocatorValueSpecified: boolean;
    loanPledgeNameLocator: number | null;
    loanPledgeNameFields: LoanPledgeNameFields_2;
}