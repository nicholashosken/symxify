import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EpisysDbExtractFields_2 } from "./episysDbExtractFields_2";
import { VersionType } from "./versionType";

export interface UpdateEpisysDbExtractByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    episysDbExtractFields: EpisysDbExtractFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}