import { DailyPostLnTypeSchedDue } from "./dailyPostLnTypeSchedDue";
import { DailyPostOffCycLnTypeSchedXfr } from "./dailyPostOffCycLnTypeSchedXfr";
import { DailyPostOffCycXlTypeSchedXfr } from "./dailyPostOffCycXlTypeSchedXfr";
import { VersionType } from "./versionType";
export interface DailyPost {
    lastRunDate: string | null;
    lnTypeSchedDue: DailyPostLnTypeSchedDue[];
    maturityCutoffDate: string | null;
    offCycLnTypeSchedXfr: DailyPostOffCycLnTypeSchedXfr[];
    offCycXlTypeSchedXfr: DailyPostOffCycXlTypeSchedXfr[];
    svAutoxferGrace: string | null;
    version1: VersionType;
}
