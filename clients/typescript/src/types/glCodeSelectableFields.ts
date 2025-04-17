import { GlCodeFields } from "./glCodeFields";
import { VersionType } from "./versionType";

export interface GlCodeSelectableFields {
    includeAllGlCodeFields: boolean | null;
    glCodeFields: GlCodeFields;
    version1: VersionType;
}