import { Ncua5300Fields } from "./ncua5300Fields";
import { VersionType } from "./versionType";
export interface Ncua5300SingleSelectableFields {
    includeAllNcua5300Fields: boolean | null;
    ncua5300Fields: Ncua5300Fields;
    version1: VersionType;
}
