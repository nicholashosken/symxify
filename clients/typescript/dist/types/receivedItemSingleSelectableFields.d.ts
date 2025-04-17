import { ReceivedItemFields } from "./receivedItemFields";
import { VersionType } from "./versionType";
export interface ReceivedItemSingleSelectableFields {
    includeAllReceivedItemFields: boolean | null;
    receivedItemFields: ReceivedItemFields;
    version1: VersionType;
}
