import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ReceivedItemSingleSelectableFields } from "./receivedItemSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ReceivedItemSelectFieldsRequest {
    receivedItemGlobalSequenceDate: string | null;
    receivedItemGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ReceivedItemSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
