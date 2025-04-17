import { CrsFields } from "./crsFields";
import { VersionType } from "./versionType";

export interface CrsSelectableFields {
    includeAllCrsFields: boolean | null;
    crsFields: CrsFields;
    version1: VersionType;
}