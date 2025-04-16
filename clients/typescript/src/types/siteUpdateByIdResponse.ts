import { UpdateStatus } from "./updateStatus";

export interface SiteUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}