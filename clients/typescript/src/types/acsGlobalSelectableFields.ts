import { AcsGlobalFields } from "./acsGlobalFields";
import { VersionType } from "./versionType";

export interface AcsGlobalSelectableFields {
    includeAllAcsGlobalFields: boolean | null;
    acsGlobalFields: AcsGlobalFields;
    version1: VersionType;
}