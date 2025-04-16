import { UpdateStatus } from "./updateStatus";

export interface UserUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}