import { TptFields } from "./tptFields";
import { VersionType } from "./versionType";

export interface TptSelectableFields {
    includeAllTptFields: boolean | null;
    tptFields: TptFields;
    version1: VersionType;
}