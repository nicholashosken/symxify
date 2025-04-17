import { LoanAppLnSegment } from "./loanAppLnSegment";
import { VersionType } from "./versionType";

export interface LoanAppLnSegmentPagedListSelectFieldsResponse {
    loanAppLnSegment: LoanAppLnSegment[];
    token: string;
    version1: VersionType;
    messageId: string;
}