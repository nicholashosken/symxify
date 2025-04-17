import { VersionType } from "./versionType";
export interface ReservePlanTransactionFields {
    accountNumber: boolean | null;
    actionCode: boolean | null;
    activityDate: boolean | null;
    adjustmentCode: boolean | null;
    balanceChange: boolean | null;
    batchSequence: boolean | null;
    branch: boolean | null;
    comment: boolean | null;
    commentFlag: boolean | null;
    consoleNumber: boolean | null;
    dealerNumber: boolean | null;
    description: boolean | null;
    effectiveDate: boolean | null;
    loanId: boolean | null;
    memberBranch: boolean | null;
    newBalance: boolean | null;
    participantType: boolean | null;
    planId: boolean | null;
    postDate: boolean | null;
    postTime: boolean | null;
    sequenceNumber: boolean | null;
    sourceCode: boolean | null;
    userNumber: boolean | null;
    userOverride: boolean | null;
    version1: VersionType;
}
