import { Household } from "./household";
export interface HouseholdList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    household: Household[];
    householdSpecified: boolean;
}
