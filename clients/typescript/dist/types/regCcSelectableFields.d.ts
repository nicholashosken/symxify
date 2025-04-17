import { RegCcFields } from "./regCcFields";
import { VersionType } from "./versionType";
export interface RegCcSelectableFields {
    includeAllRegCcFields: boolean | null;
    regCcFields: RegCcFields;
    version1: VersionType;
}
