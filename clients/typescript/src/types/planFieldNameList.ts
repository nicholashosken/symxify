import { PlanFieldName } from "./planFieldName";

export interface PlanFieldNameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    planFieldName: PlanFieldName[];
    planFieldNameSpecified: boolean;
}