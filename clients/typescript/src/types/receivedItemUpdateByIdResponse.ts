import { UpdateStatus } from "./updateStatus";

export interface ReceivedItemUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}