import { ApWorkFlow } from "./apWorkFlow";
export interface ApWorkFlowList {
    hasReachedMaximumListSize: boolean | null;
    apWorkFlow: ApWorkFlow[];
}
