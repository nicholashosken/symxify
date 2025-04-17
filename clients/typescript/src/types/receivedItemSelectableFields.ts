import { ReceivedItemFields } from "./receivedItemFields";
import { VersionType } from "./versionType";

export interface ReceivedItemSelectableFields {
    includeAllReceivedItemFields: boolean | null;
    receivedItemFields: ReceivedItemFields;
    version1: VersionType;
}