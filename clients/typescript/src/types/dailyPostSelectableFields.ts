import { DailyPostFields } from "./dailyPostFields";
import { VersionType } from "./versionType";

export interface DailyPostSelectableFields {
    includeAllDailyPostFields: boolean | null;
    dailyPostFields: DailyPostFields;
    version1: VersionType;
}