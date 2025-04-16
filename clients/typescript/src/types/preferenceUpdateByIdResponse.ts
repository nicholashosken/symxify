import { UpdateStatus } from "./updateStatus";

export interface PreferenceUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}