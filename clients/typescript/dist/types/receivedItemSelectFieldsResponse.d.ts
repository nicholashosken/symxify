import { ReceivedItem } from "./receivedItem";
import { VersionType } from "./versionType";
export interface ReceivedItemSelectFieldsResponse {
    receivedItem: ReceivedItem;
    version1: VersionType;
    messageId: string;
}
