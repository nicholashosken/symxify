import { LoanAppViewApp } from "./loanAppViewApp";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppViewAppPagedListSelectFieldsResponse {
    loanAppViewApp: LoanAppViewApp[];
    loanAppViewAppSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}