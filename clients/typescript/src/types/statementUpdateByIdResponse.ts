import { UpdateStatus } from "./updateStatus";

export interface StatementUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}