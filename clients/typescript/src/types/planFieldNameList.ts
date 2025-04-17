import { PlanFieldName } from "./planFieldName";

export interface PlanFieldNameList {
    hasReachedMaximumListSize: boolean | null;
    planFieldName: PlanFieldName[];
}