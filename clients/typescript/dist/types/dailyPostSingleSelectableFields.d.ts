import { DailyPostFields } from "./dailyPostFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DailyPostSingleSelectableFields {
    includeAllDailyPostFieldsValue: boolean;
    includeAllDailyPostFieldsValueSpecified: boolean;
    includeAllDailyPostFields: boolean | null;
    dailyPostFields: DailyPostFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
