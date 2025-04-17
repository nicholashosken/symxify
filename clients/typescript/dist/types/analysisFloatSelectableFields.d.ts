import { AnalysisFloatFields } from "./analysisFloatFields";
import { VersionType } from "./versionType";
export interface AnalysisFloatSelectableFields {
    includeAllAnalysisFloatFields: boolean | null;
    analysisFloatFields: AnalysisFloatFields;
    version1: VersionType;
}
