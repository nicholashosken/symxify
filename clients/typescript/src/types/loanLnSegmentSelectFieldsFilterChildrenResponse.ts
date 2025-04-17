import { LoanLnSegment } from "./loanLnSegment";
import { VersionType } from "./versionType";

export interface LoanLnSegmentSelectFieldsFilterChildrenResponse {
    loanLnSegment: LoanLnSegment;
    version1: VersionType;
    messageId: string;
}