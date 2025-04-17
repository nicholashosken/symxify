import { VersionType } from "./versionType";
export interface ReservePlanTransaction {
    accountNumber: string;
    actionCode: string;
    activityDate: string | null;
    adjustmentCode: number | null;
    balanceChange: number | null;
    batchSequence: number | null;
    branch: number | null;
    comment: string;
    commentFlag: number | null;
    consoleNumber: number | null;
    dealerNumber: string;
    description: string;
    effectiveDate: string | null;
    loanId: string;
    memberBranch: string;
    newBalance: number | null;
    participantType: number | null;
    planId: string;
    postDate: string | null;
    postTime: number | null;
    sequenceNumber: number | null;
    sourceCode: string;
    userNumber: number | null;
    userOverride: number | null;
    version1: VersionType;
}
