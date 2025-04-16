import { UpdateStatus } from "./updateStatus";

export interface LoanAppUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}