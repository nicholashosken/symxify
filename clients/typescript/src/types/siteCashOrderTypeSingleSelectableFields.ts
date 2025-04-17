import { SiteCashOrderTypeFields } from "./siteCashOrderTypeFields";
import { VersionType } from "./versionType";

export interface SiteCashOrderTypeSingleSelectableFields {
    includeAllSiteCashOrderTypeFields: boolean | null;
    siteCashOrderTypeFields: SiteCashOrderTypeFields;
    version1: VersionType;
}