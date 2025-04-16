import { UpdateStatus } from "./updateStatus";

export interface NoticeUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}