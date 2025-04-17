import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ReceivedItemFields_2 } from "./receivedItemFields_2";
import { VersionType } from "./versionType";

export interface UpdateReceivedItemByIdRequest {
    receivedItemGlobalSequenceDate: string | null;
    receivedItemGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    receivedItemFields: ReceivedItemFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}