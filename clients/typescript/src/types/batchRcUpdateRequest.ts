import { BatchRcFields_2 } from "./batchRcFields_2";

export interface BatchRcUpdateRequest {
    batchRcBatchReturnCodeValue: number;
    batchRcBatchReturnCodeValueSpecified: boolean;
    batchRcBatchReturnCode: number | null;
    batchRcFields: BatchRcFields_2;
}