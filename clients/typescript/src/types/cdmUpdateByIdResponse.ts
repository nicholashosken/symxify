import { UpdateStatus } from "./updateStatus";

export interface CdmUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}