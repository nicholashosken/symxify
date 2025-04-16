import { LoanAppCopiedFlds } from "./loanAppCopiedFlds";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppCopiedFldsSelectFieldsResponse {
    loanAppCopiedFlds: LoanAppCopiedFlds;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
