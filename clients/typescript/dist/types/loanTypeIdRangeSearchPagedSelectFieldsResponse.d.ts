import { LoanTypeIdRange } from "./loanTypeIdRange";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanTypeIdRangeSearchPagedSelectFieldsResponse {
    loanTypeIdRange: LoanTypeIdRange[];
    loanTypeIdRangeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
