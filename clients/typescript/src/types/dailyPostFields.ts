import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DailyPostFields {
    lastRunDateValue: boolean;
    lastRunDateValueSpecified: boolean;
    lastRunDate: boolean | null;
    lnTypeSchedDue: number[];
    lnTypeSchedDueSpecified: boolean;
    maturityCutoffDateValue: boolean;
    maturityCutoffDateValueSpecified: boolean;
    maturityCutoffDate: boolean | null;
    offCycLnTypeSchedXfr: number[];
    offCycLnTypeSchedXfrSpecified: boolean;
    offCycXlTypeSchedXfr: number[];
    offCycXlTypeSchedXfrSpecified: boolean;
    svAutoxferGraceValue: boolean;
    svAutoxferGraceValueSpecified: boolean;
    svAutoxferGrace: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}