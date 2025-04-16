import { WorkFlowRepGenFields_2 } from "./workFlowRepGenFields_2";

export interface WorkFlowRepGenUpdateRequest {
    workFlowRepGenSpecfileValue: number;
    workFlowRepGenSpecfileValueSpecified: boolean;
    workFlowRepGenSpecfile: number | null;
    workFlowRepGenFields: WorkFlowRepGenFields_2;
}