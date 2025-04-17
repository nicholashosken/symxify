import { ReceivedItem } from "./receivedItem";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ReceivedItemSelectFieldsResponse {
    receivedItem: ReceivedItem;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}