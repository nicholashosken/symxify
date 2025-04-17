import { LoanBilling } from "./loanBilling";
import { VersionType } from "./versionType";
export interface LoanBillingSearchPagedSelectFieldsResponse {
    loanBilling: LoanBilling[];
    token: string;
    version1: VersionType;
    messageId: string;
}
