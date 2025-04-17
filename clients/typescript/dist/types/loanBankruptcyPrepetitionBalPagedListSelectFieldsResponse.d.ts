import { LoanBankruptcyPrepetitionBal } from "./loanBankruptcyPrepetitionBal";
import { VersionType } from "./versionType";
export interface LoanBankruptcyPrepetitionBalPagedListSelectFieldsResponse {
    loanBankruptcyPrepetitionBal: LoanBankruptcyPrepetitionBal[];
    token: string;
    version1: VersionType;
    messageId: string;
}
