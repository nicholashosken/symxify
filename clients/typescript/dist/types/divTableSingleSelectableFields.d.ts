import { DivTableFields } from "./divTableFields";
import { VersionType } from "./versionType";
export interface DivTableSingleSelectableFields {
    includeAllDivTableFields: boolean | null;
    divTableFields: DivTableFields;
    version1: VersionType;
}
