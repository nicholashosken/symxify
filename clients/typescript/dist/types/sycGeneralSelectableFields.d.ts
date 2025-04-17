import { SycGeneralFields } from "./sycGeneralFields";
import { VersionType } from "./versionType";
export interface SycGeneralSelectableFields {
    includeAllSycGeneralFields: boolean | null;
    sycGeneralFields: SycGeneralFields;
    version1: VersionType;
}
