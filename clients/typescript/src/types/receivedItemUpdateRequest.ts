import { ReceivedItemFields_2 } from "./receivedItemFields_2";

export interface ReceivedItemUpdateRequest {
    receivedItemGlobalSequenceDateValue: string;
    receivedItemGlobalSequenceDateValueSpecified: boolean;
    receivedItemGlobalSequenceDate: string | null;
    receivedItemGlobalSequenceValue: number;
    receivedItemGlobalSequenceValueSpecified: boolean;
    receivedItemGlobalSequence: number | null;
    receivedItemFields: ReceivedItemFields_2;
}