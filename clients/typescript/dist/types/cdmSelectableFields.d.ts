import { CdmFields } from "./cdmFields";
import { VersionType } from "./versionType";
export interface CdmSelectableFields {
    includeAllCdmFields: boolean | null;
    cdmFields: CdmFields;
    version1: VersionType;
}
