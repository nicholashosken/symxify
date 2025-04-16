import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineSbaFields_2 } from "./onlineSbaFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateOnlineSbaByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    onlineSbaFields: OnlineSbaFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}