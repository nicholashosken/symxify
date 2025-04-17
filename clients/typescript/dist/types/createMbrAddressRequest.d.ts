import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { MbrAddressFields_2 } from "./mbrAddressFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CreateMbrAddressRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    mbrAddressFields: MbrAddressFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
