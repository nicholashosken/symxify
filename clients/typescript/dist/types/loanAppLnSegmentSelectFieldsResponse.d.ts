import { LoanAppLnSegment } from "./loanAppLnSegment";
import { VersionType } from "./versionType";
export interface LoanAppLnSegmentSelectFieldsResponse {
    loanAppLnSegment: LoanAppLnSegment;
    version1: VersionType;
    messageId: string;
}
