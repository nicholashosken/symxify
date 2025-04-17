import { ShareAnalysisGroupFields } from "./shareAnalysisGroupFields";
import { VersionType } from "./versionType";
export interface ShareAnalysisGroupSingleSelectableFields {
    includeAllShareAnalysisGroupFields: boolean | null;
    shareAnalysisGroupFields: ShareAnalysisGroupFields;
    version1: VersionType;
}
