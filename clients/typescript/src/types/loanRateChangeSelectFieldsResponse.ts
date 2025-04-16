import { LoanRateChange } from "./loanRateChange";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanRateChangeSelectFieldsResponse {
    loanRateChange: LoanRateChange;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}