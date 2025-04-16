import { UpdateStatus } from "./updateStatus";

export interface HouseholdUpdateByIdResponse {
    updateStatus: UpdateStatus;
    messageId: string;
}