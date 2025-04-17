import { VersionType } from "./versionType";

export interface GlHistory {
    amount: number | null;
    comment: string;
    debitCreditCode: number | null;
    effectiveDate: string | null;
    glAccountNumber: string;
    glCategory: number | null;
    postDate: string | null;
    processorUser: number | null;
    reference: string;
    sequenceNumber: number | null;
    userNumber: number | null;
    version1: VersionType;
}