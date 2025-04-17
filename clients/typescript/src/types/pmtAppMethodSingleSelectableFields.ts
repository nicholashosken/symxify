import { PmtAppMethodFields } from "./pmtAppMethodFields";
import { VersionType } from "./versionType";

export interface PmtAppMethodSingleSelectableFields {
    includeAllPmtAppMethodFields: boolean | null;
    pmtAppMethodFields: PmtAppMethodFields;
    version1: VersionType;
}