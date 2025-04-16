import { LoanDefault } from "./loanDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanDefaultPagedListSelectFieldsResponse {
    loanDefault: LoanDefault[];
    loanDefaultSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
