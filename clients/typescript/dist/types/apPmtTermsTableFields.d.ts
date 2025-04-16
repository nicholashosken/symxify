import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ApPmtTermsTableFields {
    dayofMonthDueValue: boolean;
    dayofMonthDueValueSpecified: boolean;
    dayofMonthDue: boolean | null;
    daysBeforeDueValue: boolean;
    daysBeforeDueValueSpecified: boolean;
    daysBeforeDue: boolean | null;
    discountNumDaysValue: boolean;
    discountNumDaysValueSpecified: boolean;
    discountNumDays: boolean | null;
    discountRateValue: boolean;
    discountRateValueSpecified: boolean;
    discountRate: boolean | null;
    longDescriptionValue: boolean;
    longDescriptionValueSpecified: boolean;
    longDescription: boolean | null;
    shortDescriptionValue: boolean;
    shortDescriptionValueSpecified: boolean;
    shortDescription: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
