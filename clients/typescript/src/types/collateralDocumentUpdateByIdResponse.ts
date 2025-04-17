import { UpdateStatus } from "./updateStatus";

export interface CollateralDocumentUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}