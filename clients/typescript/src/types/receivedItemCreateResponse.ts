import { ReceivedItemCompositeKey } from "./receivedItemCompositeKey";

export interface ReceivedItemCreateResponse {
    receivedItemCompositeKey: ReceivedItemCompositeKey;
    messageId: string;
}