import { VersionType } from "./versionType";
export interface PortfolioHold_2 {
    achRecurringStop: number | null;
    amount: number | null;
    availableBalance: number | null;
    effectiveDate: string | null;
    expirationDate: string | null;
    expirationTime: number | null;
    feeCode: number | null;
    feeDescription: string;
    holdCreationDate: string | null;
    holdCreationTime: string;
    ledgerBalance: number | null;
    locator: number | null;
    matchDate: string | null;
    matchTime: number | null;
    memberBranch: string;
    payeeName: string;
    recordChangeDate: string | null;
    reference1: string;
    reference2: string;
    reference3: string;
    reference4: string;
    stopPayCode: number | null;
    transactionType: number | null;
    type: number | null;
    version1: VersionType;
}
