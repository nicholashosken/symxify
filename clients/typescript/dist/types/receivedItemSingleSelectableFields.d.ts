import { ReceivedItemFields } from "./receivedItemFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ReceivedItemSingleSelectableFields {
    includeAllReceivedItemFieldsValue: boolean;
    includeAllReceivedItemFieldsValueSpecified: boolean;
    includeAllReceivedItemFields: boolean | null;
    receivedItemFields: ReceivedItemFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
