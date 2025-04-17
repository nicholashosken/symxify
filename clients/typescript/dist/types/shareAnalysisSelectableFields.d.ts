import { ShareAnalysisFields } from "./shareAnalysisFields";
import { VersionType } from "./versionType";
export interface ShareAnalysisSelectableFields {
    includeAllShareAnalysisFields: boolean | null;
    shareAnalysisFields: ShareAnalysisFields;
    version1: VersionType;
}
