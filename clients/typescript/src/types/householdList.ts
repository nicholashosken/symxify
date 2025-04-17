import { Household } from "./household";

export interface HouseholdList {
    hasReachedMaximumListSize: boolean | null;
    household: Household[];
}