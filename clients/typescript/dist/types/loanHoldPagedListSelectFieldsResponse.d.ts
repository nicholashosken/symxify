import { LoanHold } from "./loanHold";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanHoldPagedListSelectFieldsResponse {
    loanHold: LoanHold[];
    loanHoldSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
