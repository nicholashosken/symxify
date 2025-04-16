import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { Param360ViewFields_2 } from "./param360ViewFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateParam360ViewByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    param360ViewFields: Param360ViewFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}