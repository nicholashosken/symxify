import { TptFields } from "./tptFields";
import { VersionType } from "./versionType";
export interface TptSingleSelectableFields {
    includeAllTptFields: boolean | null;
    tptFields: TptFields;
    version1: VersionType;
}
