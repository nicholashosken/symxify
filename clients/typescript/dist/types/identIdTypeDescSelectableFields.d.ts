import { IdentIdTypeDescFields } from "./identIdTypeDescFields";
import { VersionType } from "./versionType";
export interface IdentIdTypeDescSelectableFields {
    includeAllIdentIdTypeDescFields: boolean | null;
    identIdTypeDescFields: IdentIdTypeDescFields;
    version1: VersionType;
}
