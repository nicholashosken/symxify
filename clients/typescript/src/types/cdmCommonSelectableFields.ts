import { CdmCommonFields } from "./cdmCommonFields";
import { VersionType } from "./versionType";

export interface CdmCommonSelectableFields {
    includeAllCdmCommonFields: boolean | null;
    cdmCommonFields: CdmCommonFields;
    version1: VersionType;
}