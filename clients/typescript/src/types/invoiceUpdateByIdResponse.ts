import { UpdateStatus } from "./updateStatus";

export interface InvoiceUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}