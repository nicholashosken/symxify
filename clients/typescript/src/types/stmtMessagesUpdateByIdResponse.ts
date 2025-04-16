import { UpdateStatus } from "./updateStatus";

export interface StmtMessagesUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}