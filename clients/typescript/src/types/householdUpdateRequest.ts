import { HouseholdFields_2 } from "./householdFields_2";

export interface HouseholdUpdateRequest {
    householdLocatorValue: number;
    householdLocatorValueSpecified: boolean;
    householdLocator: number | null;
    householdFields: HouseholdFields_2;
}