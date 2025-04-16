import { LoanApp } from "./loanApp";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppSearchPagedSelectFieldsResponse {
    loanApp: LoanApp[];
    loanAppSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}