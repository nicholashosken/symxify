import { PmtAppMethodFields } from "./pmtAppMethodFields";
import { VersionType } from "./versionType";
export interface PmtAppMethodSelectableFields {
    includeAllPmtAppMethodFields: boolean | null;
    pmtAppMethodFields: PmtAppMethodFields;
    version1: VersionType;
}
