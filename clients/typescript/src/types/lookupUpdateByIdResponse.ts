import { UpdateStatus } from "./updateStatus";

export interface LookupUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}