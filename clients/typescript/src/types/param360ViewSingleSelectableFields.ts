import { Param360ViewFields } from "./param360ViewFields";
import { VersionType } from "./versionType";

export interface Param360ViewSingleSelectableFields {
    includeAllParam360ViewFields: boolean | null;
    param360ViewFields: Param360ViewFields;
    version1: VersionType;
}