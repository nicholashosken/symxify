import { UpdateStatus } from "./updateStatus";

export interface PeriodicMtgUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}