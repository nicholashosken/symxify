import { VersionType } from "./versionType";

export interface ParticipantTransaction {
    actionCode: string;
    activityDate: string | null;
    adjustmentFlag: number | null;
    agId: string;
    balanceChange: number | null;
    batchSequence: number | null;
    branch: number | null;
    comment: string;
    commentFlag: number | null;
    consoleNumber: number | null;
    description: string;
    effectiveDate: string | null;
    loanId: string;
    memberBranch: string;
    newBalance: number | null;
    participantNumber: string;
    participantType: number | null;
    poolNumber: string;
    postDate: string | null;
    postTime: number | null;
    sequenceNumber: number | null;
    sourceCode: string;
    subActionCode: string;
    userNumber: number | null;
    userOverride: number | null;
    version1: VersionType;
}