import { UpdateStatus } from "./updateStatus";

export interface AccountUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}