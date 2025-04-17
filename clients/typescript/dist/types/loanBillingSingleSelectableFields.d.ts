import { LoanBillingFields } from "./loanBillingFields";
import { VersionType } from "./versionType";
export interface LoanBillingSingleSelectableFields {
    includeAllLoanBillingFields: boolean | null;
    loanBillingFields: LoanBillingFields;
    version1: VersionType;
}
