import { GlSubaccountFields } from "./glSubaccountFields";
import { VersionType } from "./versionType";

export interface GlSubaccountSingleSelectableFields {
    includeAllGlSubaccountFields: boolean | null;
    glSubaccountFields: GlSubaccountFields;
    version1: VersionType;
}