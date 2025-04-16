import { UpdateStatus } from "./updateStatus";

export interface CrsUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}