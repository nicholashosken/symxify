import { UpdateStatus } from "./updateStatus";
export interface CheckUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}
