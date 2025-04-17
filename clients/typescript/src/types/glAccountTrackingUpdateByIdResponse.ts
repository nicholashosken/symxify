import { UpdateStatus } from "./updateStatus";

export interface GlAccountTrackingUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}