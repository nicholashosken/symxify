import { LoanBilling } from "./loanBilling";
import { VersionType } from "./versionType";
export interface LoanBillingPagedListSelectFieldsResponse {
    loanBilling: LoanBilling[];
    token: string;
    version1: VersionType;
    messageId: string;
}
