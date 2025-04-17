import { SycGeneralFields } from "./sycGeneralFields";
import { VersionType } from "./versionType";
export interface SycGeneralSingleSelectableFields {
    includeAllSycGeneralFields: boolean | null;
    sycGeneralFields: SycGeneralFields;
    version1: VersionType;
}
