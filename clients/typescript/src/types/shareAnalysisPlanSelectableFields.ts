import { ShareAnalysisPlanFields } from "./shareAnalysisPlanFields";
import { VersionType } from "./versionType";

export interface ShareAnalysisPlanSelectableFields {
    includeAllShareAnalysisPlanFields: boolean | null;
    shareAnalysisPlanFields: ShareAnalysisPlanFields;
    version1: VersionType;
}