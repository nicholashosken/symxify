import { LoanAppPledgeFields_2 } from "./loanAppPledgeFields_2";

export interface LoanAppPledgeUpdateRequest {
    loanAppPledgeLocatorValue: number;
    loanAppPledgeLocatorValueSpecified: boolean;
    loanAppPledgeLocator: number | null;
    loanAppPledgeFields: LoanAppPledgeFields_2;
}