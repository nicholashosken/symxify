import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireIntermedFiAdvFields_2 } from "./wireIntermedFiAdvFields_2";
import { VersionType } from "./versionType";
export interface UpdateWireIntermedFiAdvByIdRequest {
    wireSequenceNumber: number | null;
    wireIntermedFiAdvLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireIntermedFiAdvFields: WireIntermedFiAdvFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
