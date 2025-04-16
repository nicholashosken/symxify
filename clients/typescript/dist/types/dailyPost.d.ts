import { DailyPostLnTypeSchedDue } from "./dailyPostLnTypeSchedDue";
import { DailyPostOffCycLnTypeSchedXfr } from "./dailyPostOffCycLnTypeSchedXfr";
import { DailyPostOffCycXlTypeSchedXfr } from "./dailyPostOffCycXlTypeSchedXfr";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DailyPost {
    lastRunDateValue: string;
    lastRunDateValueSpecified: boolean;
    lastRunDate: string | null;
    lnTypeSchedDue: DailyPostLnTypeSchedDue[];
    lnTypeSchedDueSpecified: boolean;
    maturityCutoffDateValue: string;
    maturityCutoffDateValueSpecified: boolean;
    maturityCutoffDate: string | null;
    offCycLnTypeSchedXfr: DailyPostOffCycLnTypeSchedXfr[];
    offCycLnTypeSchedXfrSpecified: boolean;
    offCycXlTypeSchedXfr: DailyPostOffCycXlTypeSchedXfr[];
    offCycXlTypeSchedXfrSpecified: boolean;
    svAutoxferGraceValue: string;
    svAutoxferGraceValueSpecified: boolean;
    svAutoxferGrace: string | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
