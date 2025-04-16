import { LoanBankruptcyPrepetitionBal } from "./loanBankruptcyPrepetitionBal";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanBankruptcyPrepetitionBalPagedListSelectFieldsResponse {
    loanBankruptcyPrepetitionBal: LoanBankruptcyPrepetitionBal[];
    loanBankruptcyPrepetitionBalSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
