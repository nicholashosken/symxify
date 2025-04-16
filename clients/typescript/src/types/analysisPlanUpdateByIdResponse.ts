import { UpdateStatus } from "./updateStatus";

export interface AnalysisPlanUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}