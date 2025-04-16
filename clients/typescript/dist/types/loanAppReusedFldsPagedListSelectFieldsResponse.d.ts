import { LoanAppReusedFlds } from "./loanAppReusedFlds";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppReusedFldsPagedListSelectFieldsResponse {
    loanAppReusedFlds: LoanAppReusedFlds[];
    loanAppReusedFldsSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
