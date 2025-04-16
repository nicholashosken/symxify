import { LoanAppReusedFlds } from "./loanAppReusedFlds";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppReusedFldsSearchPagedSelectFieldsResponse {
    loanAppReusedFlds: LoanAppReusedFlds[];
    loanAppReusedFldsSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}