import { LoanBankruptcy } from "./loanBankruptcy";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanBankruptcyPagedListSelectFieldsResponse {
    loanBankruptcy: LoanBankruptcy[];
    loanBankruptcySpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}