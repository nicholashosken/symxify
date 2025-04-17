import { GlxLateFields } from "./glxLateFields";
import { VersionType } from "./versionType";
export interface GlxLateSingleSelectableFields {
    includeAllGlxLateFields: boolean | null;
    glxLateFields: GlxLateFields;
    version1: VersionType;
}
