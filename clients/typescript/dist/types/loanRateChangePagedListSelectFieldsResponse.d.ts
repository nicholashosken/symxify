import { LoanRateChange } from "./loanRateChange";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanRateChangePagedListSelectFieldsResponse {
    loanRateChange: LoanRateChange[];
    loanRateChangeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
