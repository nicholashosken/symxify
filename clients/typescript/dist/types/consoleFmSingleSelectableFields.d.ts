import { ConsoleFmFields } from "./consoleFmFields";
import { VersionType } from "./versionType";
export interface ConsoleFmSingleSelectableFields {
    includeAllConsoleFmFields: boolean | null;
    consoleFmFields: ConsoleFmFields;
    version1: VersionType;
}
