import { LoanHold } from "./loanHold";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanHoldSelectFieldsResponse {
    loanHold: LoanHold;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}