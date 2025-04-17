import { SymXInstanceFields } from "./symXInstanceFields";
import { VersionType } from "./versionType";

export interface SymXInstanceSingleSelectableFields {
    includeAllSymXInstanceFields: boolean | null;
    symXInstanceFields: SymXInstanceFields;
    version1: VersionType;
}