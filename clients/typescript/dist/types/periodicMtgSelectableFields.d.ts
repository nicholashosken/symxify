import { PeriodicMtgFields } from "./periodicMtgFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PeriodicMtgSelectableFields {
    includeAllPeriodicMtgFieldsValue: boolean;
    includeAllPeriodicMtgFieldsValueSpecified: boolean;
    includeAllPeriodicMtgFields: boolean | null;
    periodicMtgFields: PeriodicMtgFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
