import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireReceiverFiInfoSingleSelectableFields } from "./wireReceiverFiInfoSingleSelectableFields";
import { VersionType } from "./versionType";
export interface WireReceiverFiInfoSelectFieldsRequest {
    wireSequenceNumber: number | null;
    wireReceiverFiInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireReceiverFiInfoSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
