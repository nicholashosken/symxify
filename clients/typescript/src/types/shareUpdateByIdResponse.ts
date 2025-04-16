import { UpdateStatus } from "./updateStatus";

export interface ShareUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}