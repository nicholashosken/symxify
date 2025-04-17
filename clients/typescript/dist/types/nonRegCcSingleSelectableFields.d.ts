import { NonRegCcFields } from "./nonRegCcFields";
import { VersionType } from "./versionType";
export interface NonRegCcSingleSelectableFields {
    includeAllNonRegCcFields: boolean | null;
    nonRegCcFields: NonRegCcFields;
    version1: VersionType;
}
