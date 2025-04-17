import { SymXGeneralFields } from "./symXGeneralFields";
import { VersionType } from "./versionType";

export interface SymXGeneralSelectableFields {
    includeAllSymXGeneralFields: boolean | null;
    symXGeneralFields: SymXGeneralFields;
    version1: VersionType;
}