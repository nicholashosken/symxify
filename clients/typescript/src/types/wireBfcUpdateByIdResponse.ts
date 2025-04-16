import { UpdateStatus } from "./updateStatus";

export interface WireBfcUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}