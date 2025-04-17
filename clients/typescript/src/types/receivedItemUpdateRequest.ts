import { ReceivedItemFields_2 } from "./receivedItemFields_2";

export interface ReceivedItemUpdateRequest {
    receivedItemGlobalSequenceDate: string | null;
    receivedItemGlobalSequence: number | null;
    receivedItemFields: ReceivedItemFields_2;
}