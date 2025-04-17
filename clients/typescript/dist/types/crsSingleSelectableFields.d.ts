import { CrsFields } from "./crsFields";
import { VersionType } from "./versionType";
export interface CrsSingleSelectableFields {
    includeAllCrsFields: boolean | null;
    crsFields: CrsFields;
    version1: VersionType;
}
