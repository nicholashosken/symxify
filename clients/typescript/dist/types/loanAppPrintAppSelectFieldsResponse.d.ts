import { LoanAppPrintApp } from "./loanAppPrintApp";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppPrintAppSelectFieldsResponse {
    loanAppPrintApp: LoanAppPrintApp;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
