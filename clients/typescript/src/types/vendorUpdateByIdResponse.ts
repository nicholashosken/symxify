import { UpdateStatus } from "./updateStatus";

export interface VendorUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}