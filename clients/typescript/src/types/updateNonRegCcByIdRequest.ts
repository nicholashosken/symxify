import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NonRegCcFields_2 } from "./nonRegCcFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateNonRegCcByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    nonRegCcFields: NonRegCcFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}