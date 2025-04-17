import { GlAccountFields } from "./glAccountFields";
import { VersionType } from "./versionType";
export interface GlAccountSingleSelectableFields {
    includeAllGlAccountFields: boolean | null;
    glAccountFields: GlAccountFields;
    version1: VersionType;
}
