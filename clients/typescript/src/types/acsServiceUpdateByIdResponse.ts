import { UpdateStatus } from "./updateStatus";

export interface AcsServiceUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}