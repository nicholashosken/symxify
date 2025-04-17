import { GlTableFields } from "./glTableFields";
import { VersionType } from "./versionType";
export interface GlTableSingleSelectableFields {
    includeAllGlTableFields: boolean | null;
    glTableFields: GlTableFields;
    version1: VersionType;
}
