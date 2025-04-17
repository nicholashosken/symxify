import { VersionType } from "./versionType";

export interface LoanBankruptcyPrepetitionBal_2 {
    amountCode: number | null;
    balance: number | null;
    balanceLastYear: number | null;
    balanceYtd: number | null;
    closeDate: string | null;
    id: string;
    includeInCreditRpt: number | null;
    includeInLoanBal: number | null;
    lastPaymentDate: string | null;
    openDate: string | null;
    originalBalance: number | null;
    recordChangeDate: string | null;
    version1: VersionType;
}