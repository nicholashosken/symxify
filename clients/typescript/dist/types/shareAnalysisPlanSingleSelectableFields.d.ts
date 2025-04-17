import { ShareAnalysisPlanFields } from "./shareAnalysisPlanFields";
import { VersionType } from "./versionType";
export interface ShareAnalysisPlanSingleSelectableFields {
    includeAllShareAnalysisPlanFields: boolean | null;
    shareAnalysisPlanFields: ShareAnalysisPlanFields;
    version1: VersionType;
}
