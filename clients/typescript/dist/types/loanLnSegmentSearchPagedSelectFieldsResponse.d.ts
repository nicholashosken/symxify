import { LoanLnSegment } from "./loanLnSegment";
import { VersionType } from "./versionType";
export interface LoanLnSegmentSearchPagedSelectFieldsResponse {
    loanLnSegment: LoanLnSegment[];
    token: string;
    version1: VersionType;
    messageId: string;
}
