import { GlCodeFields } from "./glCodeFields";
import { VersionType } from "./versionType";

export interface GlCodeSingleSelectableFields {
    includeAllGlCodeFields: boolean | null;
    glCodeFields: GlCodeFields;
    version1: VersionType;
}