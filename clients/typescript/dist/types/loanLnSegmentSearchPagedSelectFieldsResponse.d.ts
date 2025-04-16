import { LoanLnSegment } from "./loanLnSegment";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanLnSegmentSearchPagedSelectFieldsResponse {
    loanLnSegment: LoanLnSegment[];
    loanLnSegmentSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
