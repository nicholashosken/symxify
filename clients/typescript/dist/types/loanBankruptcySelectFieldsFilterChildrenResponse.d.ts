import { LoanBankruptcy } from "./loanBankruptcy";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanBankruptcySelectFieldsFilterChildrenResponse {
    loanBankruptcy: LoanBankruptcy;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
