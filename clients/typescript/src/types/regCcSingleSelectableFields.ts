import { RegCcFields } from "./regCcFields";
import { VersionType } from "./versionType";

export interface RegCcSingleSelectableFields {
    includeAllRegCcFields: boolean | null;
    regCcFields: RegCcFields;
    version1: VersionType;
}