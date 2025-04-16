import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ApPmtTermsTable {
    dayofMonthDueValue: number;
    dayofMonthDueValueSpecified: boolean;
    dayofMonthDue: number | null;
    daysBeforeDueValue: number;
    daysBeforeDueValueSpecified: boolean;
    daysBeforeDue: number | null;
    discountNumDaysValue: number;
    discountNumDaysValueSpecified: boolean;
    discountNumDays: number | null;
    discountRateValue: number;
    discountRateValueSpecified: boolean;
    discountRate: number | null;
    longDescription: string;
    shortDescription: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}