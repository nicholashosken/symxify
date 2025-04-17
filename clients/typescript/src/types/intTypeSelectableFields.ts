import { IntTypeFields } from "./intTypeFields";
import { VersionType } from "./versionType";

export interface IntTypeSelectableFields {
    includeAllIntTypeFields: boolean | null;
    intTypeFields: IntTypeFields;
    version1: VersionType;
}