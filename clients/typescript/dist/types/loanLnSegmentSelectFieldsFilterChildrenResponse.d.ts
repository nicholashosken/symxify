import { LoanLnSegment } from "./loanLnSegment";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanLnSegmentSelectFieldsFilterChildrenResponse {
    loanLnSegment: LoanLnSegment;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
