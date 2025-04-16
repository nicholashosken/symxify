import { UpdateStatus } from "./updateStatus";

export interface TrackingCodeUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}