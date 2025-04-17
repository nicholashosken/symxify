import { GlTrackingTypeFields } from "./glTrackingTypeFields";
import { VersionType } from "./versionType";

export interface GlTrackingTypeSingleSelectableFields {
    includeAllGlTrackingTypeFields: boolean | null;
    glTrackingTypeFields: GlTrackingTypeFields;
    version1: VersionType;
}