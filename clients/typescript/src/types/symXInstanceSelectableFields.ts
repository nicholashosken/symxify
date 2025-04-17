import { SymXInstanceFields } from "./symXInstanceFields";
import { VersionType } from "./versionType";

export interface SymXInstanceSelectableFields {
    includeAllSymXInstanceFields: boolean | null;
    symXInstanceFields: SymXInstanceFields;
    version1: VersionType;
}