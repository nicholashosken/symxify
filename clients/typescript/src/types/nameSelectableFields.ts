import { NameFields } from "./nameFields";
import { VersionType } from "./versionType";

export interface NameSelectableFields {
    includeAllNameFields: boolean | null;
    nameFields: NameFields;
    version1: VersionType;
}