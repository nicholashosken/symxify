import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireCorpVerFields_2 } from "./wireCorpVerFields_2";
import { VersionType } from "./versionType";
export interface UpdateWireCorpVerByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireCorpVerFields: WireCorpVerFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
