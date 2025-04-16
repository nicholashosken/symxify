import { LoanAppReusedFlds } from "./loanAppReusedFlds";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppReusedFldsSelectFieldsResponse {
    loanAppReusedFlds: LoanAppReusedFlds;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
