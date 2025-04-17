import { SycClientFields } from "./sycClientFields";
import { VersionType } from "./versionType";

export interface SycClientSelectableFields {
    includeAllSycClientFields: boolean | null;
    sycClientFields: SycClientFields;
    version1: VersionType;
}