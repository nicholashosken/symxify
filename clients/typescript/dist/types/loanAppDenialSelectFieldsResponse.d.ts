import { LoanAppDenial } from "./loanAppDenial";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppDenialSelectFieldsResponse {
    loanAppDenial: LoanAppDenial;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
