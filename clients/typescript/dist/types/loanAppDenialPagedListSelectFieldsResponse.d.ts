import { LoanAppDenial } from "./loanAppDenial";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppDenialPagedListSelectFieldsResponse {
    loanAppDenial: LoanAppDenial[];
    loanAppDenialSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
