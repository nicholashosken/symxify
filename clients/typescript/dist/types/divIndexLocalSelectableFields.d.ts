import { DivIndexLocalFields } from "./divIndexLocalFields";
import { VersionType } from "./versionType";
export interface DivIndexLocalSelectableFields {
    includeAllDivIndexLocalFields: boolean | null;
    divIndexLocalFields: DivIndexLocalFields;
    version1: VersionType;
}
