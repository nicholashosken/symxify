import { VersionType } from "./versionType";

export interface ParticipantTransactionFields {
    actionCode: boolean | null;
    activityDate: boolean | null;
    adjustmentFlag: boolean | null;
    agId: boolean | null;
    balanceChange: boolean | null;
    batchSequence: boolean | null;
    branch: boolean | null;
    comment: boolean | null;
    commentFlag: boolean | null;
    consoleNumber: boolean | null;
    description: boolean | null;
    effectiveDate: boolean | null;
    loanId: boolean | null;
    memberBranch: boolean | null;
    newBalance: boolean | null;
    participantNumber: boolean | null;
    participantType: boolean | null;
    poolNumber: boolean | null;
    postDate: boolean | null;
    postTime: boolean | null;
    sequenceNumber: boolean | null;
    sourceCode: boolean | null;
    subActionCode: boolean | null;
    userNumber: boolean | null;
    userOverride: boolean | null;
    version1: VersionType;
}