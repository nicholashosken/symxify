import { SymXGeneralFields } from "./symXGeneralFields";
import { VersionType } from "./versionType";
export interface SymXGeneralSingleSelectableFields {
    includeAllSymXGeneralFields: boolean | null;
    symXGeneralFields: SymXGeneralFields;
    version1: VersionType;
}
