import { VersionType } from "./versionType";

export interface LoanBankruptcyPrepetitionBalFields {
    amountCode: boolean | null;
    balance: boolean | null;
    balanceLastYear: boolean | null;
    balanceYtd: boolean | null;
    closeDate: boolean | null;
    id: boolean | null;
    includeInCreditRpt: boolean | null;
    includeInLoanBal: boolean | null;
    lastPaymentDate: boolean | null;
    openDate: boolean | null;
    originalBalance: boolean | null;
    recordChangeDate: boolean | null;
    version1: VersionType;
}