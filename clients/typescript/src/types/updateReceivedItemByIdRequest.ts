import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ReceivedItemFields_2 } from "./receivedItemFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateReceivedItemByIdRequest {
    receivedItemGlobalSequenceDateValue: string;
    receivedItemGlobalSequenceDateValueSpecified: boolean;
    receivedItemGlobalSequenceDate: string | null;
    receivedItemGlobalSequenceValue: number;
    receivedItemGlobalSequenceValueSpecified: boolean;
    receivedItemGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    receivedItemFields: ReceivedItemFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}