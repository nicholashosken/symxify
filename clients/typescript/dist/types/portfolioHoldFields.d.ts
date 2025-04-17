import { VersionType } from "./versionType";
export interface PortfolioHoldFields {
    achRecurringStop: boolean | null;
    amount: boolean | null;
    availableBalance: boolean | null;
    effectiveDate: boolean | null;
    expirationDate: boolean | null;
    expirationTime: boolean | null;
    feeCode: boolean | null;
    feeDescription: boolean | null;
    holdCreationDate: boolean | null;
    holdCreationTime: boolean | null;
    ledgerBalance: boolean | null;
    locator: boolean | null;
    matchDate: boolean | null;
    matchTime: boolean | null;
    memberBranch: boolean | null;
    payeeName: boolean | null;
    recordChangeDate: boolean | null;
    reference1: boolean | null;
    reference2: boolean | null;
    reference3: boolean | null;
    reference4: boolean | null;
    stopPayCode: boolean | null;
    transactionType: boolean | null;
    type: boolean | null;
    version1: VersionType;
}
