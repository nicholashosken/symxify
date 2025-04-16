import { UpdateStatus } from "./updateStatus";

export interface LoanAppEscrowUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}