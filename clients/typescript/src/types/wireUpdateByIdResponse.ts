import { UpdateStatus } from "./updateStatus";

export interface WireUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}