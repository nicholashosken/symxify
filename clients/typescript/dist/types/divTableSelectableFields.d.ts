import { DivTableFields } from "./divTableFields";
import { VersionType } from "./versionType";
export interface DivTableSelectableFields {
    includeAllDivTableFields: boolean | null;
    divTableFields: DivTableFields;
    version1: VersionType;
}
