import { NonRegCcFields } from "./nonRegCcFields";
import { VersionType } from "./versionType";
export interface NonRegCcSelectableFields {
    includeAllNonRegCcFields: boolean | null;
    nonRegCcFields: NonRegCcFields;
    version1: VersionType;
}
