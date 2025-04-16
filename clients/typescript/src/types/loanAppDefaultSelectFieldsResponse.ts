import { LoanAppDefault } from "./loanAppDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppDefaultSelectFieldsResponse {
    loanAppDefault: LoanAppDefault;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}