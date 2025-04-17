import { VersionType } from "./versionType";
export interface ApPmtTermsTable {
    dayofMonthDue: number | null;
    daysBeforeDue: number | null;
    discountNumDays: number | null;
    discountRate: number | null;
    longDescription: string;
    shortDescription: string;
    version1: VersionType;
}
