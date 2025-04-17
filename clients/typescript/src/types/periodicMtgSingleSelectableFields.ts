import { PeriodicMtgFields } from "./periodicMtgFields";
import { VersionType } from "./versionType";

export interface PeriodicMtgSingleSelectableFields {
    includeAllPeriodicMtgFields: boolean | null;
    periodicMtgFields: PeriodicMtgFields;
    version1: VersionType;
}