import { VersionType } from "./versionType";

export interface ApPmtTermsTableFields {
    dayofMonthDue: boolean | null;
    daysBeforeDue: boolean | null;
    discountNumDays: boolean | null;
    discountRate: boolean | null;
    longDescription: boolean | null;
    shortDescription: boolean | null;
    version1: VersionType;
}