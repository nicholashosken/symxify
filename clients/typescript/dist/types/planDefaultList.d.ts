import { PlanDefault } from "./planDefault";
export interface PlanDefaultList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    planDefault: PlanDefault[];
    planDefaultSpecified: boolean;
}
