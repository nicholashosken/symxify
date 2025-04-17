import { HouseholdFields } from "./householdFields";
import { VersionType } from "./versionType";

export interface HouseholdSelectableFields {
    includeAllHouseholdFields: boolean | null;
    householdFields: HouseholdFields;
    version1: VersionType;
}