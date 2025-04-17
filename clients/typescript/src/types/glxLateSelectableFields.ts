import { GlxLateFields } from "./glxLateFields";
import { VersionType } from "./versionType";

export interface GlxLateSelectableFields {
    includeAllGlxLateFields: boolean | null;
    glxLateFields: GlxLateFields;
    version1: VersionType;
}