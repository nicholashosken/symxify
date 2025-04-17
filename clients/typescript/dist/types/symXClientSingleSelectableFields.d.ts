import { SymXClientFields } from "./symXClientFields";
import { VersionType } from "./versionType";
export interface SymXClientSingleSelectableFields {
    includeAllSymXClientFields: boolean | null;
    symXClientFields: SymXClientFields;
    version1: VersionType;
}
