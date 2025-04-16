import { UpdateStatus } from "./updateStatus";

export interface CdmCommonUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}