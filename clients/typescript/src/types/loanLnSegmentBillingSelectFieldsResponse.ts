import { LoanLnSegmentBilling } from "./loanLnSegmentBilling";
import { VersionType } from "./versionType";

export interface LoanLnSegmentBillingSelectFieldsResponse {
    loanLnSegmentBilling: LoanLnSegmentBilling;
    version1: VersionType;
    messageId: string;
}