import { LoanAppLnSegment } from "./loanAppLnSegment";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppLnSegmentSelectFieldsResponse {
    loanAppLnSegment: LoanAppLnSegment;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
