import { VersionType } from "./versionType";

export interface DailyPostFields {
    lastRunDate: boolean | null;
    lnTypeSchedDue: number[];
    maturityCutoffDate: boolean | null;
    offCycLnTypeSchedXfr: number[];
    offCycXlTypeSchedXfr: number[];
    svAutoxferGrace: boolean | null;
    version1: VersionType;
}