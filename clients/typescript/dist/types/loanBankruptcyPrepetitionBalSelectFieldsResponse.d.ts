import { LoanBankruptcyPrepetitionBal } from "./loanBankruptcyPrepetitionBal";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanBankruptcyPrepetitionBalSelectFieldsResponse {
    loanBankruptcyPrepetitionBal: LoanBankruptcyPrepetitionBal;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
