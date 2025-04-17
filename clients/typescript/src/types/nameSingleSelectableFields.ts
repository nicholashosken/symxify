import { NameFields } from "./nameFields";
import { VersionType } from "./versionType";

export interface NameSingleSelectableFields {
    includeAllNameFields: boolean | null;
    nameFields: NameFields;
    version1: VersionType;
}