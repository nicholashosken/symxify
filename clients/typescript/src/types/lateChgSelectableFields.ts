import { LateChgFields } from "./lateChgFields";
import { VersionType } from "./versionType";

export interface LateChgSelectableFields {
    includeAllLateChgFields: boolean | null;
    lateChgFields: LateChgFields;
    version1: VersionType;
}