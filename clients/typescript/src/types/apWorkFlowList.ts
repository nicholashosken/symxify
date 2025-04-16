import { ApWorkFlow } from "./apWorkFlow";

export interface ApWorkFlowList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    apWorkFlow: ApWorkFlow[];
    apWorkFlowSpecified: boolean;
}