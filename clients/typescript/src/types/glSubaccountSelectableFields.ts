import { GlSubaccountFields } from "./glSubaccountFields";
import { VersionType } from "./versionType";

export interface GlSubaccountSelectableFields {
    includeAllGlSubaccountFields: boolean | null;
    glSubaccountFields: GlSubaccountFields;
    version1: VersionType;
}