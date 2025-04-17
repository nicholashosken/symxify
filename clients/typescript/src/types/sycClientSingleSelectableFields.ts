import { SycClientFields } from "./sycClientFields";
import { VersionType } from "./versionType";

export interface SycClientSingleSelectableFields {
    includeAllSycClientFields: boolean | null;
    sycClientFields: SycClientFields;
    version1: VersionType;
}