import { ConsoleFmFields } from "./consoleFmFields";
import { VersionType } from "./versionType";

export interface ConsoleFmSelectableFields {
    includeAllConsoleFmFields: boolean | null;
    consoleFmFields: ConsoleFmFields;
    version1: VersionType;
}