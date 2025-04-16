import { WorkFlowRepGen } from "./workFlowRepGen";

export interface WorkFlowRepGenList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    workFlowRepGen: WorkFlowRepGen[];
    workFlowRepGenSpecified: boolean;
}