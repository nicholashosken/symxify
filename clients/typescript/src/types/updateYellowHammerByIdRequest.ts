import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { YellowHammerFields_2 } from "./yellowHammerFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateYellowHammerByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    yellowHammerFields: YellowHammerFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}