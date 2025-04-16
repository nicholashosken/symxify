import { UpdateStatus } from "./updateStatus";

export interface CommentUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}