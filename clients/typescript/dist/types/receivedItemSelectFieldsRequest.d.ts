import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ReceivedItemSingleSelectableFields } from "./receivedItemSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ReceivedItemSelectFieldsRequest {
    receivedItemGlobalSequenceDateValue: string;
    receivedItemGlobalSequenceDateValueSpecified: boolean;
    receivedItemGlobalSequenceDate: string | null;
    receivedItemGlobalSequenceValue: number;
    receivedItemGlobalSequenceValueSpecified: boolean;
    receivedItemGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ReceivedItemSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
