import { LoanAppFieldName } from "./loanAppFieldName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppFieldNameSearchPagedSelectFieldsResponse {
    loanAppFieldName: LoanAppFieldName[];
    loanAppFieldNameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
