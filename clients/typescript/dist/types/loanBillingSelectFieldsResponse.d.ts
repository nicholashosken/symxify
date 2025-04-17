import { LoanBilling } from "./loanBilling";
import { VersionType } from "./versionType";
export interface LoanBillingSelectFieldsResponse {
    loanBilling: LoanBilling;
    version1: VersionType;
    messageId: string;
}
