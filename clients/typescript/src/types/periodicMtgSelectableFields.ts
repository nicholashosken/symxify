import { PeriodicMtgFields } from "./periodicMtgFields";
import { VersionType } from "./versionType";

export interface PeriodicMtgSelectableFields {
    includeAllPeriodicMtgFields: boolean | null;
    periodicMtgFields: PeriodicMtgFields;
    version1: VersionType;
}