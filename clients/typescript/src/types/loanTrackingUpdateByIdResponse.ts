import { UpdateStatus } from "./updateStatus";

export interface LoanTrackingUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}