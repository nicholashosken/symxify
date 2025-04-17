import { WorkFlowRepGen } from "./workFlowRepGen";

export interface WorkFlowRepGenList {
    hasReachedMaximumListSize: boolean | null;
    workFlowRepGen: WorkFlowRepGen[];
}