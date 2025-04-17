import { UpdateStatus } from "./updateStatus";

export interface CtrUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}