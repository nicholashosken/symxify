import { LoanAppMisc } from "./loanAppMisc";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppMiscSelectFieldsResponse {
    loanAppMisc: LoanAppMisc;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
