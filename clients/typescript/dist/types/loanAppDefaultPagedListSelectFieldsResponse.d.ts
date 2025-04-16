import { LoanAppDefault } from "./loanAppDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppDefaultPagedListSelectFieldsResponse {
    loanAppDefault: LoanAppDefault[];
    loanAppDefaultSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
