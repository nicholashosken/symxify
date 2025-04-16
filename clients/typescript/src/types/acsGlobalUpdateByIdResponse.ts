import { UpdateStatus } from "./updateStatus";

export interface AcsGlobalUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}