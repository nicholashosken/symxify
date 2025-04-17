import { GlHistoryFields } from "./glHistoryFields";
import { VersionType } from "./versionType";
export interface GlHistorySelectableFields {
    includeAllGlHistoryFields: boolean | null;
    glHistoryFields: GlHistoryFields;
    version1: VersionType;
}
