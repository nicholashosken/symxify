import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SynapsysMrmFields_2 } from "./synapsysMrmFields_2";
import { VersionType } from "./versionType";

export interface UpdateSynapsysMrmByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    synapsysMrmFields: SynapsysMrmFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}