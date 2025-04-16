import { LoanTypeIdRange } from "./loanTypeIdRange";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanTypeIdRangeSelectFieldsResponse {
    loanTypeIdRange: LoanTypeIdRange;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
