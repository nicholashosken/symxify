import { GlAccountTrackingFields } from "./glAccountTrackingFields";
import { VersionType } from "./versionType";
export interface GlAccountTrackingSelectableFields {
    includeAllGlAccountTrackingFields: boolean | null;
    glAccountTrackingFields: GlAccountTrackingFields;
    version1: VersionType;
}
