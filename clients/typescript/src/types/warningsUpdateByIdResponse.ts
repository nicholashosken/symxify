import { UpdateStatus } from "./updateStatus";

export interface WarningsUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}