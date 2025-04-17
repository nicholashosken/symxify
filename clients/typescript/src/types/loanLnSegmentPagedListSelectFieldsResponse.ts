import { LoanLnSegment } from "./loanLnSegment";
import { VersionType } from "./versionType";

export interface LoanLnSegmentPagedListSelectFieldsResponse {
    loanLnSegment: LoanLnSegment[];
    token: string;
    version1: VersionType;
    messageId: string;
}