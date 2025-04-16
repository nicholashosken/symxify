import { LoanAppViewApp } from "./loanAppViewApp";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppViewAppSelectFieldsResponse {
    loanAppViewApp: LoanAppViewApp;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
