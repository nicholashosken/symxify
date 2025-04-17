import { VersionType } from "./versionType";

export interface GlHistoryFields {
    amount: boolean | null;
    comment: boolean | null;
    debitCreditCode: boolean | null;
    effectiveDate: boolean | null;
    glAccountNumber: boolean | null;
    glCategory: boolean | null;
    postDate: boolean | null;
    processorUser: boolean | null;
    reference: boolean | null;
    sequenceNumber: boolean | null;
    userNumber: boolean | null;
    version1: VersionType;
}