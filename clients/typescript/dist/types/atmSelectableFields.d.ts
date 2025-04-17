import { AtmFields } from "./atmFields";
import { VersionType } from "./versionType";
export interface AtmSelectableFields {
    includeAllAtmFields: boolean | null;
    atmFields: AtmFields;
    version1: VersionType;
}
