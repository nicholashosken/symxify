import { IdentIdTypeDescFields } from "./identIdTypeDescFields";
import { VersionType } from "./versionType";

export interface IdentIdTypeDescSingleSelectableFields {
    includeAllIdentIdTypeDescFields: boolean | null;
    identIdTypeDescFields: IdentIdTypeDescFields;
    version1: VersionType;
}