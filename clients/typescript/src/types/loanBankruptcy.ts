import { LoanBankruptcyPrepetitionBalList } from "./loanBankruptcyPrepetitionBalList";
import { VersionType } from "./versionType";

export interface LoanBankruptcy {
    closeDate: string | null;
    description: string;
    effectDate: string | null;
    expireDate: string | null;
    id: string;
    loanBankruptcyPrepetitionBalList: LoanBankruptcyPrepetitionBalList;
    openDate: string | null;
    recordChangeDate: string | null;
    type: number | null;
    version1: VersionType;
}