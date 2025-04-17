import { UpdateStatus } from "./updateStatus";

export interface WireServiceMessageUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}