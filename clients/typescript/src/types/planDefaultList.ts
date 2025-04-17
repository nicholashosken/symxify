import { PlanDefault } from "./planDefault";

export interface PlanDefaultList {
    hasReachedMaximumListSize: boolean | null;
    planDefault: PlanDefault[];
}