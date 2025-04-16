import { LoanAppCopiedFlds } from "./loanAppCopiedFlds";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppCopiedFldsSearchPagedSelectFieldsResponse {
    loanAppCopiedFlds: LoanAppCopiedFlds[];
    loanAppCopiedFldsSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
