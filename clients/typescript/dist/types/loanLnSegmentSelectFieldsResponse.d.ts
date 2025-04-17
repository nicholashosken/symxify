import { LoanLnSegment } from "./loanLnSegment";
import { VersionType } from "./versionType";
export interface LoanLnSegmentSelectFieldsResponse {
    loanLnSegment: LoanLnSegment;
    version1: VersionType;
    messageId: string;
}
