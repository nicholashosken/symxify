import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DeleteReceivedItemRequest {
    receivedItemGlobalSequenceDateValue: string;
    receivedItemGlobalSequenceDateValueSpecified: boolean;
    receivedItemGlobalSequenceDate: string | null;
    receivedItemGlobalSequenceValue: number;
    receivedItemGlobalSequenceValueSpecified: boolean;
    receivedItemGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
