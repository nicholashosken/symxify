import { GlTableFields } from "./glTableFields";
import { VersionType } from "./versionType";

export interface GlTableSelectableFields {
    includeAllGlTableFields: boolean | null;
    glTableFields: GlTableFields;
    version1: VersionType;
}