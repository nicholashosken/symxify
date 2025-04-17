import { DailyPostFields } from "./dailyPostFields";
import { VersionType } from "./versionType";

export interface DailyPostSingleSelectableFields {
    includeAllDailyPostFields: boolean | null;
    dailyPostFields: DailyPostFields;
    version1: VersionType;
}