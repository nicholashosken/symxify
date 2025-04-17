import { LoanLnSegmentBilling } from "./loanLnSegmentBilling";
import { VersionType } from "./versionType";

export interface LoanLnSegmentBillingSearchPagedSelectFieldsResponse {
    loanLnSegmentBilling: LoanLnSegmentBilling[];
    token: string;
    version1: VersionType;
    messageId: string;
}