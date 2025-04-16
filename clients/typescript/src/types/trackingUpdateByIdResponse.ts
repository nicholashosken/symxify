import { UpdateStatus } from "./updateStatus";

export interface TrackingUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}