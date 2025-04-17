import { AnalysisGlobalFields } from "./analysisGlobalFields";
import { VersionType } from "./versionType";

export interface AnalysisGlobalSelectableFields {
    includeAllAnalysisGlobalFields: boolean | null;
    analysisGlobalFields: AnalysisGlobalFields;
    version1: VersionType;
}