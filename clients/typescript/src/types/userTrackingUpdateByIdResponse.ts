import { UpdateStatus } from "./updateStatus";

export interface UserTrackingUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}