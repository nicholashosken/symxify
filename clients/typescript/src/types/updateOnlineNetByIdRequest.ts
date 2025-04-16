import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineNetFields_2 } from "./onlineNetFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateOnlineNetByIdRequest {
    onlineNetNetworkMessageFormatValue: number;
    onlineNetNetworkMessageFormatValueSpecified: boolean;
    onlineNetNetworkMessageFormat: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    onlineNetFields: OnlineNetFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}