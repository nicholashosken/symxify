import { SymXClientFields } from "./symXClientFields";
import { VersionType } from "./versionType";

export interface SymXClientSelectableFields {
    includeAllSymXClientFields: boolean | null;
    symXClientFields: SymXClientFields;
    version1: VersionType;
}