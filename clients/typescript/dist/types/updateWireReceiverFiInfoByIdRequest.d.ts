import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireReceiverFiInfoFields_2 } from "./wireReceiverFiInfoFields_2";
import { VersionType } from "./versionType";
export interface UpdateWireReceiverFiInfoByIdRequest {
    wireSequenceNumber: number | null;
    wireReceiverFiInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireReceiverFiInfoFields: WireReceiverFiInfoFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
