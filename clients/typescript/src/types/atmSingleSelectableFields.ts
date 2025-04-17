import { AtmFields } from "./atmFields";
import { VersionType } from "./versionType";

export interface AtmSingleSelectableFields {
    includeAllAtmFields: boolean | null;
    atmFields: AtmFields;
    version1: VersionType;
}