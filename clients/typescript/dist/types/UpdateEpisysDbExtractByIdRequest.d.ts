import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EpisysDbExtractFields_2 } from "./episysDbExtractFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateEpisysDbExtractByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    episysDbExtractFields: EpisysDbExtractFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
