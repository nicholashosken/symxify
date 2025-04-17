import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireServiceMessageFields_2 } from "./wireServiceMessageFields_2";
import { VersionType } from "./versionType";
export interface UpdateWireServiceMessageByIdRequest {
    wireSequenceNumber: number | null;
    wireServiceMessageLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireServiceMessageFields: WireServiceMessageFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
