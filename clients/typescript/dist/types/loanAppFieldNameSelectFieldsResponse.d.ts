import { LoanAppFieldName } from "./loanAppFieldName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppFieldNameSelectFieldsResponse {
    loanAppFieldName: LoanAppFieldName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
