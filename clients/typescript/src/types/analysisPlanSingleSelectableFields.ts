import { AnalysisPlanFields } from "./analysisPlanFields";
import { VersionType } from "./versionType";

export interface AnalysisPlanSingleSelectableFields {
    includeAllAnalysisPlanFields: boolean | null;
    analysisPlanFields: AnalysisPlanFields;
    version1: VersionType;
}