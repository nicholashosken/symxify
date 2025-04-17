import { DivIndexLocalFields } from "./divIndexLocalFields";
import { VersionType } from "./versionType";

export interface DivIndexLocalSingleSelectableFields {
    includeAllDivIndexLocalFields: boolean | null;
    divIndexLocalFields: DivIndexLocalFields;
    version1: VersionType;
}