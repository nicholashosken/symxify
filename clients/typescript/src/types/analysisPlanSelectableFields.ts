import { AnalysisPlanFields } from "./analysisPlanFields";
import { VersionType } from "./versionType";

export interface AnalysisPlanSelectableFields {
    includeAllAnalysisPlanFields: boolean | null;
    analysisPlanFields: AnalysisPlanFields;
    version1: VersionType;
}