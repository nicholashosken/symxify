import { SecFieldFields } from "./secFieldFields";
import { VersionType } from "./versionType";

export interface SecFieldSingleSelectableFields {
    includeAllSecFieldFields: boolean | null;
    secFieldFields: SecFieldFields;
    version1: VersionType;
}