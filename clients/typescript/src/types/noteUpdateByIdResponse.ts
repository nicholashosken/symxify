import { UpdateStatus } from "./updateStatus";

export interface NoteUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}