import { HouseholdFields } from "./householdFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface HouseholdSingleSelectableFields {
    includeAllHouseholdFieldsValue: boolean;
    includeAllHouseholdFieldsValueSpecified: boolean;
    includeAllHouseholdFields: boolean | null;
    householdFields: HouseholdFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
